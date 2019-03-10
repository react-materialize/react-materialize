import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import idgen from './idgen';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.id = props.id || `sidenav_${idgen()}`;
  }

  componentDidMount() {
    if (typeof M !== 'undefined') {
      const { options } = this.props;
      this.instance = M.Sidenav.init(this._sidenav, options);
    }
  }

  componentWillUnmount() {
    this.instance && this.instance.destroy();
  }

  render() {
    const { className, children, trigger, fixed, ...props } = this.props;
    delete props.id;
    delete props.options;
    const classNames = cx(
      'sidenav',
      { 'sidenav-fixed': fixed || !trigger },
      className
    );

    return (
      <Fragment>
        {this.renderTrigger()}
        <ul
          ref={el => (this._sidenav = el)}
          id={this.id}
          className={classNames}
          {...props}
        >
          {children}
        </ul>
      </Fragment>
    );
  }

  renderTrigger() {
    const { trigger, fixed } = this.props;
    if (!trigger) {
      return;
    }
    const triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
    const classNames = cx(
      trigger.props.className,
      triggerView,
      'sidenav-trigger'
    );
    return React.cloneElement(trigger, {
      ref: t => (this._trigger = `[data-target=${this.id}]`),
      'data-target': this.id,
      className: classNames
    });
  }
}

SideNav.propTypes = {
  /**
   * Adds sidenav-fixed class to sidenav
   */
  fixed: PropTypes.bool,
  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: PropTypes.string,
  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: PropTypes.node,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: PropTypes.shape({
    edge: PropTypes.oneOf(['left', 'right']),
    draggable: PropTypes.bool
  }),
  /**
   * Additional classes added to 'sidenav'
   */
  className: PropTypes.string,
  children: PropTypes.node
};

export default SideNav;
