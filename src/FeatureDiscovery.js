import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

class FeatureDiscovery extends Component {
  constructor(props) {
    super(props);
    this.state = {mounted: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.close = this.close.bind(this);
    this.reference = this.reference.bind(this);
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.open();
    } else if (nextProps.open === false) {
      this.close();
    }
  }

  reference(element) {
    this._element = element;
    if (this.props.open) {
      this.open();
    }
  }

  open() {
    const element = $(this._element);
    element.tapTarget('open');

    const parent = element.parent('.tap-target-wrapper');
    const origin = parent.find('.tap-target-origin');
    const target = $('#' + this.props.target);
    origin.click(
      () => {
        target.trigger('click')
        target.trigger('mouseover')
      }
    )
  }

  close() {
    $(this._element).tapTarget('close');
  }

  render() {
    if (!this.state.mounted) {
      return (
        <div/>
      );
    }
    const {children, className, target} = this.props;
    const classes = cx('tap-target', className);

    return (
      <div
        className={classes}
        data-activates={target}
        ref={this.reference}
      >
        <div className='tap-target-content'>
          {children}
        </div>
      </div>
    )
  }
}

FeatureDiscovery.propTypes = {
  /**
   * Extra class to be added
   */
  className: PropTypes.string,
  /**
   * Component children
   */
  children: PropTypes.node,
  /**
   * ID of the target Button
   */
  target: PropTypes.string,
  /**
   * Open on mount?
   * @default false
   */
  open: PropTypes.bool
};

FeatureDiscovery.defaultProps = {
  open: false
};

export default FeatureDiscovery;
