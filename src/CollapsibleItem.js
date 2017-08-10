import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import Icon from './Icon';

class CollapsibleItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      headerStyle: props.headerStyle
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.expanded !== nextProps.expanded) {
      const { onSelect, eventKey, id } = this.props;
      if (!this.state.expanded) {
        this.setState({ expanded: !this.state.expanded });
        setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
      } else {
        setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
        setTimeout(() => {this.setState({ expanded: !this.state.expanded })}, 500);
      }

      if (onSelect) {
        onSelect(eventKey);
      }
    }
    
    if (this.state.headerStyle !== nextProps.headerStyle) {
      this.setState({ headerStyle: nextProps.headerStyle });
    }
  }

  render () {
    const {
      node,
      header,
      icon,
      iconClassName,
      className,
      ...props
    } = this.props;

    const { expanded } = this.state;
    const { headerStyle } = this.state;

    delete props.expanded;
    delete props.headerStyle;
    delete props.eventKey;

    const C = node;
    const liClasses = {
      active: expanded
    };
    const headerClasses = {
      'collapsible-header': true,
      active: expanded
    };

    return (
      <li className={cx(liClasses, className)} {...props}>
        <C className={cx(headerClasses)} onClick={this.handleClick} style={headerStyle}>
          {icon && this.renderIcon(icon, iconClassName)}
          {header}
        </C>
        {expanded && this.renderBody()}
      </li>
    );
  }

  handleClick () {
    const { onSelect, eventKey, id } = this.props;

    if (!this.state.expanded) {
      this.setState({ expanded: !this.state.expanded });
      setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
    } else {
      setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
      setTimeout(() => {this.setState({ expanded: !this.state.expanded })}, 500);
    }
    if (onSelect) {
      onSelect(eventKey);
    }
  }

  renderBody () {
    return (
      <div className='collapsible-body' style={{ display: 'none' }}>
        {this.props.children}
      </div>
    );
  }

  renderIcon (icon, iconClassName) {
    return <Icon className={iconClassName}>{icon}</Icon>;
  }
}

CollapsibleItem.propTypes = {
  header: PropTypes.any.isRequired,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  children: PropTypes.node,
  onSelect: PropTypes.func,
  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: PropTypes.bool,
  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: PropTypes.any,
  className: PropTypes.string,
  /**
   * The node type of the header
   * @default a
   */
  node: PropTypes.node
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'a',
  headerStyle: {}
};

export default CollapsibleItem;
