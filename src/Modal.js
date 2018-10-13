import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

import idgen from './idgen';
import Button from './Button';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalID = props.id || `modal_${idgen()}`;
    this.showModal = this.showModal.bind(this);
    this.createRoot();
  }

  createRoot() {
    this.modalRoot = document.createElement('div');
    document.body.appendChild(this.modalRoot);
  }

  componentDidMount() {
    if (M) {
      const { trigger, options, open } = this.props;

      this.instance = M.Modal.init(this._modal, options);

      if (open) this.showModal();
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
    this.modalRoot = null;
    this.instance && this.instance.destroy();
  }

  componentWillReceiveProps(nextProps) {
    // if the modal is not open yet
    if (!this.props.open && nextProps.open) {
      this.showModal();
      // open could be undefined
    } else if (nextProps.open === false) {
      this.hideModal();
    }
  }

  renderModalPortal() {
    const {
      actions,
      bottomSheet,
      children,
      fixedFooter,
      header,
      className,
      ...other
    } = this.props;

    delete other.options;
    delete other.trigger;

    const classes = cx(
      'modal',
      {
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      },
      className
    );

    return this.modalRoot
      ? ReactDOM.createPortal(
          <div
            {...other}
            className={classes}
            id={this.modalID}
            ref={div => {
              this._modal = div;
            }}
          >
            <div className="modal-content">
              <h4>{header}</h4>
              {children}
            </div>
            <div className="modal-footer">
              {React.Children.toArray(actions)}
            </div>
          </div>,
          this.modalRoot
        )
      : null;
  }

  showModal(e) {
    e && e.preventDefault();

    this.instance && this.instance.open();
  }

  hideModal(e) {
    e && e.preventDefault();

    this.instance && this.instance.close();
  }

  render() {
    const { trigger } = this.props;

    return (
      <div>
        {trigger && React.cloneElement(trigger, { onClick: this.showModal })}
        {this.renderModalPortal()}
      </div>
    );
  }
}

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: PropTypes.shape({
    /*
    * Opacity of the modal overlay.
    */
    opacity: PropTypes.number,
    /*
     * Transition in duration in milliseconds.
     */
    inDuration: PropTypes.number,
    /*
     * Transition out duration in milliseconds.
     */
    outDuration: PropTypes.number,
    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: PropTypes.func,
    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: PropTypes.func,
    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: PropTypes.func,
    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: PropTypes.func,
    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: PropTypes.bool,
    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: PropTypes.bool,
    /**
     * Starting top offset
     */
    startingTop: PropTypes.string,
    /**
     * Ending top offset
     */
    endingTop: PropTypes.string
  }),
  /**
   * Extra class to added to the Modal
   */
  className: PropTypes.string,
  /**
   * Modal is opened on mount
   */
  open: PropTypes.bool,
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
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  fixedFooter: false,
  bottomSheet: false,
  actions: [
    <Button waves="green" modal="close" flat>
      Close
    </Button>
  ]
};

export default Modal;
