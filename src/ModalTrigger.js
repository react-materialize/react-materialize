var React = require('react/addons'),
    cx = React.addons.classSet,
    cloneWithProps = require('react/lib/cloneWithProps'),
    OverlayMixin = require('./OverlayMixin');

var ModalTrigger = React.createClass({
  mixins: [OverlayMixin],

  propTypes: {
    modal: React.PropTypes.node.isRequired
  },

  getInitialState() {
    return {isOverlayShown: false};
  },

  render() {
    var child = React.Children.only(this.props.children);
    return cloneWithProps(child, {onClick: this.toggle});
  },

  toggle() {
    this.setState({
      isOverlayShown: !this.state.isOverlayShown
    });
  },

  hide() {
    this.setState({
      isOverlayShown: false
    });
  },

  renderOverlay() {
    if (!this.state.isOverlayShown) {
      return <span />;
    }
    return cloneWithProps(this.props.modal, {onRequestHide: this.hide});
  }
});

module.exports = ModalTrigger;
