import React from 'react';
import Overlay from './Overlay';
import idgen from './idgen';

class OverlayTrigger extends Overlay {
  constructor (props) {
    super(props);
    this.state = {isOverlayShown: false};
    this.showOverlay = this.showOverlay.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
    this.overlayID = this.props.overlay.props.id || `overlay_${idgen()}`;
  }

  render () {
    const child = React.Children.only(this.props.children);

    return React.cloneElement(
      child,
      {onClick: this.showOverlay}
    );
  }

  renderOverlay () {
    return React.cloneElement(this.props.overlay, {onRequestHide: this.toggle, id: this.overlayID});
  }

  showOverlay () {
    $('#' + this.overlayID).openModal();
  }
}

OverlayTrigger.propTypes = {
  overlay: React.PropTypes.node
};

export default OverlayTrigger;
