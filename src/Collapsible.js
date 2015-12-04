import React from 'react';
import cx from 'classnames';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: this.props.defaultActiveKey
    };
  }

  render() {
    let {
      accordion, popout, className, children, ...props
    } = this.props;
    let classes = {
      collapsible: true,
      popout,
    };
    let collapsible = accordion ? 'accordion' : 'expandable';
    return (
      <ul className={cx(className, classes)} {...props} data-collapsible={collapsible}>
        {React.Children.map(children, this.renderItem)}
      </ul>
    );
  }

  renderItem(child, index) {
    let props = {
      key: child.key ? child.key : index,
      ref: child.ref
    };
    if (this.props.accordion) {
      props.expanded = child.props.eventKey === this.state.activeKey;
      props.onSelect = this.handleSelect;
    }

    return React.cloneElement(child, props);
  }

  handleSelect(key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    if (this.state.activeKey === key) {
      key = null;
    }
    this.setState({
      activeKey: key
    });
  }
}

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default false
   */
  accordion: React.PropTypes.bool,
  /**
   * Enable popout style
   */
  popout: React.PropTypes.bool,
  defaultActiveKey: React.PropTypes.number,
  onSelect: React.PropTypes.func,
};

Collapsible.defaultProps = {
  accordion: false
};

export default Collapsible;
