import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';
import cx from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.idx = 'dropdown_' + idgen();
    this.renderTrigger = this.renderTrigger.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    const options = this.props.options || {};

    if (typeof M !== undefined) {
      this.instance = M.Dropdown.init(this._trigger, options);
    }
  }

  componentWillUnmount() {
    if (typeof M !== undefined) {
      this.instance.destroy();
    }
  }

  render() {
    const { className, ...props } = this.props;
    delete props.trigger;
    delete props.options;

    return (
      <React.Fragment>
        {this.renderTrigger()}
        <ul
          {...props}
          className={cx('dropdown-content', className)}
          id={this.idx}
        >
          {this.renderItems()}
        </ul>
      </React.Fragment>
    );
  }

  renderTrigger() {
    const { trigger } = this.props;

    return React.cloneElement(trigger, {
      ref: t => (this._trigger = `[data-target=${this.idx}]`),
      className: cx(trigger.props.className, 'dropdown-trigger'),
      'data-target': this.idx
    });
  }

  renderItems() {
    const { children } = this.props;

    return React.Children.map(children, element => {
      if (element.type.name === 'Divider') {
        return <li className="divider" tabIndex="-1" />;
      } else {
        return <li key={idgen()}>{element}</li>;
      }
    });
  }
}

Dropdown.propTypes = {
  /**
   * The node to trigger the dropdown
   */
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Options hash for the dropdown
   * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
   */
  options: PropTypes.shape({
    alignment: PropTypes.oneOf(['left', 'right']),
    autoTrigger: PropTypes.bool,
    constrainWidth: PropTypes.bool,
    container: PropTypes.node,
    coverTrigger: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    hover: PropTypes.bool,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    onOpenStart: PropTypes.func,
    onOpenEnd: PropTypes.func,
    onCloseStart: PropTypes.func,
    onCloseEnd: PropTypes.func
  })
};

export default Dropdown;
