import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { children, rounded, className } = this.props;
    const classes = { toast: true, rounded: rounded };

    return (
      <Button onClick={this.onClick} className={cx(classes, className)}>
        {children}
      </Button>
    );
  }

  onClick() {
    Materialize.toast(this.props.toast, 1000);
  }
}

Toast.propTypes = {
  className: PropTypes.string,
  /**
   * The message to display in the toast
   */
  toast: PropTypes.string.isRequired,
  /**
   * The text to render in the button that fires the toast
   */
  children: PropTypes.node,
  rounded: PropTypes.bool
};

export default Toast;
