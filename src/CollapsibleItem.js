import React from 'react';
import Icon from './Icon';

class CollapsibleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: this.props.expanded};
    this.handleClick = this.handleClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    let {node, header, icon, children, ...props} = this.props;
    let C = node || 'a';

    return (
      <li {...props}>
        <C className='collapsible-header' onClick={this.handleClick}>
          {icon ? this.renderIcon(icon) : null}
          {header}
        </C>
        {this.state.expanded ? this.renderBody() : null}
      </li>
    );
  }

  handleClick() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey);
    } else {
      this.setState({expanded: !this.state.expanded});
    }
  }

  renderBody() {
    let style = {display: 'block'};
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
  header: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  popout: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  /**
   * If the item is expanded by default
   * @default false
   */
  expanded: React.PropTypes.bool,
  /**
   * The node type of the header
   * @default a
   */
  node: React.PropTypes.node,
}

CollapsibleItem.defaultProps = {
  expanded: false,
  popout: false,
};

export default CollapsibleItem;
