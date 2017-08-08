import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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

  componentDidUpdate () {
    const { scroll, expanded } = this.props;

    if (expanded) {
      ReactDOM.findDOMNode(this).scrollIntoView({ behavior: scroll });
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
        {this.renderBody()}
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
  node: PropTypes.node,
  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: PropTypes.oneOf(['auto', 'instant', 'smooth'])
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};

export default CollapsibleItem;
