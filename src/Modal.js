import React from 'react';
import Button from './Button';
import cx from 'classnames';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    var {header, children, fixedFooter, bottomSheet, ...props} = this.props;
    var classes = {modal: true};
    classes['modal-fixed-footer'] = this.props.fixedFooter;
    classes['bottom-sheet'] = this.props.bottomSheet;
    return (
      <div className={cx(classes)} {...props}>
        <div className="modal-content">
          <h4>{header}</h4>
          <p>{children}</p>
        </div>
        <div className="modal-footer">
          <Button waves='light' modal='close' flat>Close</Button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    header: React.PropTypes.string,
    fixedFooter: React.PropTypes.bool,
    bottomSheet: React.PropTypes.bool
}

export default Modal;
