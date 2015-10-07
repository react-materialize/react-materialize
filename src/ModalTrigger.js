var React = require('react/addons'),
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
    return React.cloneElement(child, {onClick: this.toggle});
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

}
