import React from 'react';
import Overlay from './Overlay';

class OverlayTrigger extends Overlay {
  constructor(props) {
    super(props);
    this.state = {isOverlayShown: false};
    this.toggle = this.toggle.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
  }

  render() {
    var {overlay, children, ...props} = this.props;
    var child = React.Children.only(children);
    return React.cloneElement(
      child,
      {onClick: this.toggle}
    );
  }

  renderOverlay() {
    if (!this.state.isOverlayShown) {
      return <span />;
    }
      return React.cloneElement(this.props.overlay, {onRequestHide: this.toggle});
  }

  toggle() {
    this.setState({isOverlayShown: !this.state.isOverlayShown});
  }
}

OverlayTrigger.propTypes = {
    overlay: React.PropTypes.node
};

export default OverlayTrigger;
