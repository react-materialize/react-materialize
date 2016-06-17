import React from 'react';
import cx from 'classnames';
import Icon from './Icon';

class CollapsibleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    const {node, header, icon, ...props} = this.props;
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

  handleClick() {
    const { onSelect, eventKey } = this.props;

    if (onSelect) {
      onSelect(eventKey);
    } else {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  renderBody() {
    if (!this.state.expanded && !this.props.expanded) return;

    const style = {display: 'block'};
    return (
      <div className='collapsible-body' style={style}>
        {this.props.children}
      </div>
    );
  }

  renderIcon(icon) {
    return <Icon>{icon}</Icon>;
  }
}

CollapsibleItem.propTypes = {
  children: React.PropTypes.node,
  header: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  /**
   * If the item is expanded by default
   * @default false
   */
  expanded: React.PropTypes.bool,
  /**
   * The value to pass to the onSelect callback
   */
  eventKey: React.PropTypes.any,
  /**
   * The node type of the header
   * @default a
   */
  node: React.PropTypes.node
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'a'
};

export default CollapsibleItem;
