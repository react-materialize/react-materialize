import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import cx from 'classnames';
import OverlayTrigger from './OverlayTrigger';
import idgen from './idgen';

class Modal extends Component {
  constructor (props) {
    super(props);
    this.modalID = props.id || `modal_${idgen()}`;
  }

  componentDidMount () {
    const { trigger, modalOptions } = this.props;

    if (!trigger) {
      $(`#${this.modalID}`).modal(modalOptions);
    }
  }

  renderOverlay () {
    const {
      actions,
      bottomSheet,
      children,
      fixedFooter,
      header,
      ...other
    } = this.props;

    delete other.modalOptions;
    delete other.trigger;

    const classes = cx({
      'modal': true,
      'modal-fixed-footer': fixedFooter,
      'bottom-sheet': bottomSheet
    });

    return (
      <div {...other} className={classes} id={this.modalID}>
        <div className='modal-content'>
          <h4>{header}</h4>
          {children}
        </div>
        <div className='modal-footer'>
          {React.Children.toArray(actions)}
        </div>
      </div>
    );
  }

  render () {
    const { modalOptions, trigger } = this.props;

    return (
      <OverlayTrigger
        modalOptions={modalOptions}
        overlay={this.renderOverlay()}
      >
        { trigger }
      </OverlayTrigger>
    );
  }
}

Modal.propTypes = {
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
  /**
  * BottomSheet styled modal
  * @default false
  */
  bottomSheet: PropTypes.bool,
  /**
   * Component children
   */
  children: PropTypes.node,
  /**
  * FixedFooter styled modal
  * @default false
  */
  fixedFooter: PropTypes.bool,
  /**
   * Text to shown in the header of the modal
   */
  header: PropTypes.string,
  /**
   * The button to trigger the display of the modal
   */
  trigger: PropTypes.node,
  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: PropTypes.node,
  /**
   * The ID to trigger the modal opening/closing
   */
  id: PropTypes.string
};

Modal.defaultProps = {
  modalOptions: {},
  fixedFooter: false,
  bottomSheet: false,
  actions: [<Button waves='light' modal='close' flat>Close</Button>]
};

export default Modal;
