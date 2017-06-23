import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Collapsible extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeKey: props.defaultActiveKey || ''
    };

    this.renderItem = this.renderItem.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  render () {
    const {
      accordion,
      popout,
      className,
      children,
      ...props
    } = this.props;

    delete props.defaultActiveKey;

    const classes = {
      collapsible: true,
      popout
    };
    const collapsible = accordion ? 'accordion' : 'expandable';

    return (
      <ul className={cx(className, classes)} {...props} data-collapsible={collapsible}>
        {React.Children.map(children, this.renderItem)}
      </ul>
    );
  }

  renderItem (child, key) {
    if (!child) return null;
    const eventKey = `key${key}`;

    const props = {};

    if (this.props.accordion) {
      props.expanded = this.state.activeKey === eventKey;
      props.onSelect = this.handleSelect;
      props.eventKey = eventKey;
    }

    return React.cloneElement(child, props);
  }

  handleSelect (key) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(key);
    }
    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({ activeKey: key });
  }
}

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default false
   */
  accordion: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Enable popout style
   */
  popout: PropTypes.bool,
  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: PropTypes.any,
  onSelect: PropTypes.func
};

Collapsible.defaultProps = {
  accordion: false
};

export default Collapsible;
