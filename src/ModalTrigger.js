var React = require('react/addons'),
    cloneWithProps = require('react/lib/cloneWithProps'),
    Overlay = require('./Overlay');

export default class ModalTrigger extends Overlay {
  static propTypes = {
    modal: React.PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {isOverlayShown: false};
  }

  render() {
    var child = React.Children.only(this.props.children);
    return cloneWithProps(child, {onClick: this.toggle});
  }

  toggle() {
    this.setState({
      isOverlayShown: !this.state.isOverlayShown
    });
  }

  hide() {
    this.setState({
      isOverlayShown: false
    });
  }

  renderOverlay() {
    if (!this.state.isOverlayShown) {
      return <span />;
    }
    return cloneWithProps(this.props.modal, {onRequestHide: this.hide});
  }
}
