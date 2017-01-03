import React, { Component, PropTypes } from 'react';
import idgen from './idgen';

class SideNav extends Component {
  componentDidMount () {
    const { options = {}, right, closeOnClick } = this.props;
    $(this._trigger).sideNav({
      ...options,
      edge: right || options.edge,
      closeOnClick: closeOnClick || options.closeOnClick
    });
  }

  componentWillUnmount () {
    $(this._trigger).sideNav('hide');
  }

  render () {
    const { children, id = [`sidenav_${idgen()}`], ...props } = this.props;
    this.id = id;
    delete props.right;
    delete props.closeOnClick;
    delete props.trigger;
    delete props.options;
    return (
      <span>
        { this.renderTrigger() }
        <ul id={id} className='side-nav' {...props}>
          {children}
        </ul>
      </span>
    );
  }

  renderTrigger () {
    const { trigger } = this.props;
    return React.cloneElement(trigger, {
      ref: (t) => (this._trigger = `[data-activates=${this.id}]`),
      'data-activates': this.id
    });
  }
}

SideNav.propTypes = {
  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: PropTypes.string,
  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: PropTypes.node.isRequired,
  /**
   * Position the sidenav on the right edge of the screen
   * @default false
   */
  right: PropTypes.bool,
  /**
   * Closes side-nav on anchor clicks
   * @default false
   */
  closeOnClick: PropTypes.bool,
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
  children: PropTypes.node
};

SideNav.defaultProps = {
  right: false,
  closeOnClick: false
};

export default SideNav;
