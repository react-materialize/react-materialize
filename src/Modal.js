import React from 'react';
import Button from './Button';
import cx from 'classnames';
import OverlayTrigger from './OverlayTrigger';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOverlay() {
    const {
      header,
      children,
      fixedFooter,
      bottomSheet,
      ...props
    } = this.props;

    const classes = cx({
      'modal': true,
      'modal-fixed-footer': fixedFooter,
      'bottom-sheet': bottomSheet
    });

    return (
      <div className={classes} {...props}>
        <div className="modal-content">
          <h4>{header}</h4>
          {children}
        </div>
        <div className="modal-footer">
          <Button waves='light' modal='close' flat>Close</Button>
        </div>
      </div>
    );
  }

  render() {
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
  bottomSheet: React.PropTypes.bool,

  /**
   * Component children
   */
  children: React.PropTypes.node,

  /**
  * FixedFooter styled modal
  * @default false
  */
  fixedFooter: React.PropTypes.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: React.PropTypes.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: React.PropTypes.node.isRequired
};

Modal.defaultProps = {
  fixedFooter: false,
  bottomSheet: false
};

export default Modal;
