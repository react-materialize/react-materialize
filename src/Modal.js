import React, { Component, PropTypes } from 'react';
import Button from './Button';
import cx from 'classnames';
import OverlayTrigger from './OverlayTrigger';

class Modal extends Component {
  renderOverlay () {
    const {
      header,
      children,
      fixedFooter,
      bottomSheet,
      actions,
      ...props
    } = this.props;

    const classes = cx({
      'modal': true,
      'modal-fixed-footer': fixedFooter,
      'bottom-sheet': bottomSheet
    });

    return (
      <div className={classes} {...props}>
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
    return (
      <OverlayTrigger overlay={this.renderOverlay()}>
        {this.props.trigger}
      </OverlayTrigger>
    );
  }
}

Modal.propTypes = {
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
  trigger: PropTypes.node.isRequired,
  /**
   * The buttons to show in the footer of the modal
   */
  actions: PropTypes.node
};

Modal.defaultProps = {
  fixedFooter: false,
  bottomSheet: false,
  actions: [<Button waves='light' modal='close' flat>Close</Button>]
};

export default Modal;
