import React from 'react';
import Overlay from './Overlay';
import idgen from './idgen';

class OverlayTrigger extends Overlay {
  constructor(props) {
    super(props);
    this.state = {isOverlayShown: false};
    this.showOverlay = this.showOverlay.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
    this.overlayID = `overlay_${idgen()}`;
  }

  render() {
    let {overlay, children, ...props} = this.props;
    let child = React.Children.only(children);
    return React.cloneElement(
      child,
      {onClick: this.showOverlay}
    );
  }

  renderOverlay() {
    return React.cloneElement(this.props.overlay, {onRequestHide: this.toggle, id: this.overlayID});
  }

  showOverlay() {
    $('#' + this.overlayID).openModal();
  }
}

OverlayTrigger.propTypes = {
  /**
   *
   */
  overlay: React.PropTypes.node
};

export default OverlayTrigger;
