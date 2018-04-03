import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import idgen from './idgen';

class SideNav extends Component {
  constructor (props) {
    super(props);
    this.id = props.id || `sidenav_${idgen()}`;
  }

  componentDidMount () {
    const { options = {} } = this.props;
    $(this._trigger).sideNav(options);
  }

  render () {
    const { className, children, fixed, ...props } = this.props;
    delete props.id;
    delete props.trigger;
    delete props.options;
    delete props.showOnLarge;

    const classNames = cx('side-nav', { fixed }, className);
    if (!this.props.trigger && !this.props.fixed) {
      console.warn('No trigger was passed for the SideNav object. If no trigger was desired, please pass `fixed` to view your SideNav');
    }

    return (
      <span>
        { this.props.trigger && this.renderTrigger() }
        <ul id={this.id} className={classNames} {...props}>
          {children}
        </ul>
      </span>
    );
  }

  renderTrigger () {
    const { trigger } = this.props;
    const showOnLarge = this.props.showOnLarge ? 'show-on-large' : 'hide-on-large-only';
    const classNames = cx(trigger.props.className, showOnLarge);
    return React.cloneElement(trigger, {
      ref: (t) => (this._trigger = `[data-activates=${this.id}]`),
      'data-activates': this.id,
      className: classNames
    });
  }
}

SideNav.propTypes = {
  /**
   * Adds fixed class to side-nav
   */
  fixed: PropTypes.bool,
  /**
   * Adds showOnLarge class to Trigger
   */
  showOnLarge: PropTypes.bool,
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
    menuWidth: PropTypes.number,
    edge: PropTypes.oneOf(['left', 'right']),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool
  }),
  /**
   * Additional classes added to 'side-nav'
   */
  className: PropTypes.string,
  children: PropTypes.node
};

export default SideNav;
