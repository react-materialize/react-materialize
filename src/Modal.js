import React from 'react';
import Button from './Button';
import cx from 'classnames';
import OverlayTrigger from './OverlayTrigger';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {header, trigger, children, fixedFooter, bottomSheet, ...props} = this.props;
    let classes = {modal: true};
    classes['modal-fixed-footer'] = this.props.fixedFooter;
    classes['bottom-sheet'] = this.props.bottomSheet;
    return (
      <OverlayTrigger overlay={
          <div className={cx(classes)} {...props}>
            <div className="modal-content">
              <h4>{header}</h4>
              {children}
            </div>
            <div className="modal-footer">
              <Button waves='light' modal='close' flat>Close</Button>
            </div>
          </div>
        }>
        {trigger}
      </OverlayTrigger>
    );
  }
}

Modal.propTypes = {
  /**
   * Text to shown in the header of the modal
   */
  header: React.PropTypes.string,
  /**
   * The button to trigger the display of the modal
   */
  trigger: React.PropTypes.node.isRequired,
  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: React.PropTypes.bool,
  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: React.PropTypes.bool,
}

Modal.defaultProps = {
  fixedFooter: false,
  bottomSheet: false,
}

export default Modal;
