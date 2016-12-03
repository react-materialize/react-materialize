import React, { Component, PropTypes } from 'react';
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
    const scroll = this.props.scroll;
    const options = ['auto', 'instant', 'smooth'];

    if (options.indexOf(scroll) >= 0 && this.props.expanded) {
      ReactDOM.findDOMNode(this).scrollIntoView({ behavior: scroll });
    }
  }

  render () {
    const {
      node,
      header,
      icon,
      classes,
      ...props
    } = this.props;

    delete props.expanded;
    delete props.eventKey;

    const C = node;
    const liClasses = {
      active: this.state.expanded
    };
    const headerClasses = {
      'collapsible-header': true,
      active: this.state.expanded
    };

    return (
      <li className={cx(liClasses, classes)} {...props}>
        <C className={cx(headerClasses)} onClick={this.handleClick}>
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
    const style = this.state.expanded ? { display: 'block' } : {};

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
  header: PropTypes.string.isRequired,
  icon: PropTypes.string,
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
  /**
   * The node type of the header
   * @default a
   */
  node: PropTypes.node,
  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: PropTypes.string
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'a'
};

export default CollapsibleItem;
