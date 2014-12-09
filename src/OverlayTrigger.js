var React = require('react'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses'),
    cloneWithProps = require('react/lib/cloneWithProps'),
    OverlayMixin = require('./OverlayMixin');

var OverlayTrigger = React.createClass({
  mixins: [OverlayMixin],

  propTypes: {
    overlay: React.PropTypes.node
  },

  getInitialState() {
    return {isOverlayShown: false};
  },

  render() {
    var {overlay, children, ...props} = this.props;
    var child = React.Children.only(children);
    return cloneWithProps(
      child,
      {onClick: this.toggle}
    );
  },

  renderOverlay() {
    if (!this.state.isOverlayShown) {
      return <span />;
    }
    return this.props.overlay;
  },

  toggle() {
    this.setState({isOverlayShown: !this.state.isOverlayShown});
  }
});

module.exports = OverlayTrigger;
