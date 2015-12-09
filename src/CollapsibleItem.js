import React from 'react';
import cx from 'classnames';
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
    let {node, header, expanded, icon, children, ...props} = this.props;
    let C = node || 'a';
    let classes = {
      'collapsible-header': true,
    };

    return (
      <li {...props}>
        <C className={cx(classes)} onClick={this.handleClick}>
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
  node: React.PropTypes.node,
}

CollapsibleItem.defaultProps = {
  expanded: false,
};

export default CollapsibleItem;
