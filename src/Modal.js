import React from 'react';
import Button from './Button';
import cx from 'classnames';

export default class Modal extends React.Component {
  static propTypes: {
    header: React.PropTypes.string,
    fixedFooter: React.PropTypes.bool,
    bottomSheet: React.PropTypes.bool
  }

  render() {
    var {header, children, fixedFooter, bottomSheet, ...props} = this.props;
    var style = {
      display: 'block',
      position: 'fixed',
      top: '10%',
      opacity: 1,
      zIndex: 1050
    };
    var classes = {modal: true};
    classes['modal-fixed-footer'] = this.props.fixedFooter;
    classes['bottom-sheet'] = this.props.bottomSheet;
    var modal = (
      <div className={cx(classes)} {...props} style={style}>
        <div className="modal-content">
          <h4>{header}</h4>
          <p>{children}</p>
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide} waves='light' modal='close' flat>Close</Button>
        </div>
      </div>
    );
    var backdropStyle = {
      backgroundColor: '#000',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1040,
      position: 'fixed',
      opacity: 0.5
    };
    return (
      <div>
        <div style={backdropStyle} ref='backdrop' onClick={this.handleBackdropClick} />
        {modal}
      </div>
    );
  }

  handleBackdropClick(e) {
    e.preventDefault();
    this.props.onRequestHide();
  }
}
