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
      ...props
    } = this.props;

    delete props.expanded;

    const C = node;
    const classes = {
      'collapsible-header': true
    };

    return (
      <li {...props}>
        <C className={cx(classes)} onClick={this.handleClick}>
          {icon ? this.renderIcon(icon) : null}
          {header}
        </C>
        { this.renderBody() }
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
    if (!this.state.expanded) return;

    const style = {display: 'block'};
    return (
      <div className='collapsible-body' style={style}>
        {this.props.children}
      </div>
    );
  }

  renderIcon (icon) {
    return <Icon>{icon}</Icon>;
  }
}

CollapsibleItem.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onSelect: PropTypes.func,
  /**
   * If the item is expanded by default
   * @default false
   */
  expanded: PropTypes.bool,
  /**
   * The value to pass to the onSelect callback
   */
  eventKey: PropTypes.any,
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
