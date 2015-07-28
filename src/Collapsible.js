var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses'),
    cloneWithProps = require('react/lib/cloneWithProps');

var cx = React.addons.classSet;
var Collapsible = React.createClass({
  propTypes: {
    accordion: React.PropTypes.bool.isRequired
  },

  getDefaultProps() {
    return {accordion: false}; },

  getInitialState() {
    return {activeKey: this.props.defaultActiveKey};
  },

  render() {
    var {accordion, className, children, ...props} = this.props;
    var classes = {
      collapsible: true,
      accordion
    };
    return (
      <ul className={joinClasses(className, cx(classes))} {...props}>
        {React.Children.map(children, this.renderItem)}
      </ul>
    );
  },

  renderItem(child, index) {
    var props = {
      key: child.key ? child.key : index,
      ref: child.ref
    };
    if (this.props.accordion) {
      props.expanded = child.props.eventKey === this.state.activeKey;
      props.onSelect = this.handleSelect;
    }

    return cloneWithProps(child, props);
  },

  handleSelect(key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    if (this.state.activeKey === key) {
      key = null;
    }
    this.setState({activeKey: key});
  }
});

module.exports = Collapsible;
