import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

class SideNav extends Component {
  constructor (props) {
    super(props);
    this.id = props.id || `sidenav_${idgen()}`;
  }

  show () {
    $(this._trigger).sideNav('show');
  }

  hide () {
    $(this._trigger).sideNav('hide');
  }

  destroy () {
    $(this._trigger).sideNav('destroy');
  }

  componentDidMount () {
    const { options = {} } = this.props;
    $(this._trigger).sideNav(options);
  }

  render () {
    const { children, fixed, ...props } = this.props;
    delete props.id;
    delete props.trigger;
    delete props.options;
    delete props.fixed;
    delete props.showOnLarge;
    return (
      <span>
        { this.renderTrigger() }
        <ul id={this.id} className={'side-nav' + (fixed ? ' fixed' : '')} {...props}>
          {children}
        </ul>
      </span>
    );
  }

  renderTrigger () {
    const { trigger, showOnLarge } = this.props;
    // delete this.props.showOnLarge;
    return React.cloneElement(trigger, {
      ref: (t) => (this._trigger = `[data-activates=${this.id}]`),
      'data-activates': this.id,
      className: ((trigger.props.className !== undefined ? trigger.props.className : '') + (showOnLarge ? ' show-on-large' : ''))
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
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: PropTypes.shape({
    menuWidth: PropTypes.number,
    edge: PropTypes.oneOf(['left', 'right']),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool
  }),
  fixed: PropTypes.bool,
  showOnLarge: PropTypes.bool,
  children: PropTypes.node
};

export default SideNav;
