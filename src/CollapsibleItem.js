import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Icon from './Icon';

class CollapsibleItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: props.expanded
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
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

    delete props.expanded;
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
        <C className={cx(headerClasses)} onClick={this.handleClick}>
          {icon && this.renderIcon(icon, iconClassName)}
          {header}
        </C>
        {expanded && this.renderBody()}
      </li>
    );
  }

  handleClick () {
    const { onSelect, eventKey } = this.props;

    if (onSelect) {
      onSelect(eventKey);
    } else {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  renderBody () {
    return (
      <div className='collapsible-body' style={{ display: 'block' }}>
        {this.props.children}
      </div>
    );
  }

  renderIcon (icon, iconClassName) {
    return <Icon className={iconClassName}>{icon}</Icon>;
  }
}

CollapsibleItem.propTypes = {
  header: PropTypes.string.isRequired,
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
  node: 'a'
};

export default CollapsibleItem;
