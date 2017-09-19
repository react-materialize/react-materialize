import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import idgen from './idgen';

class OverlayTrigger extends Overlay {
  constructor (props) {
    super(props);
    this.showOverlay = this.showOverlay.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
    this.overlayID = this.props.overlay.props.id || `overlay_${idgen()}`;
  }

  render () {
    const { children } = this.props;
    if (!children) return null;

    const child = React.Children.only(children);
    return React.cloneElement(
      child, {
        onClick: this.showOverlay
      }
    );
  }

  renderOverlay () {
    return React.cloneElement(this.props.overlay, {
      id: this.overlayID
    });
  }

  showOverlay (e) {
    e.preventDefault();
    const { modalOptions = {} } = this.props;
    $(`#${this.overlayID}`).modal(modalOptions).modal('open');
  }
}

OverlayTrigger.propTypes = {
  /**
  * ModalOptions
  * Object with options for modal
  */
  modalOptions: PropTypes.shape({
    /*
     * Modal can be dismissed by clicking outside of the modal
     */
    dismissible: PropTypes.bool,
    /*
     * Opacity of modal background ( from 0 to 1 )
     */
    opacity: PropTypes.number,
    /*
     * Transition in duration
     */
    inDuration: PropTypes.number,
    /*
     * Transition out duration
     */
    outDuration: PropTypes.number,
    /*
     * Starting top style attribute
     */
    startingTop: PropTypes.string,
    /*
     * Ending top style attribute
     */
    endingTop: PropTypes.string,
    /*
     * Callback for Modal open. Modal and trigger parameters available.
     */
    ready: PropTypes.func,
    /*
     *  Callback for Modal close
     */
    complete: PropTypes.func
  }),
  overlay: PropTypes.node
};

export default OverlayTrigger;
