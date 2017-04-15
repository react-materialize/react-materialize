import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

class Toast extends Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render () {
    const { children, rounded } = this.props;
    const classes = { toast: true, rounded: rounded };

    return (
      <Button onClick={this.onClick} className={cx(classes)}>
        {children}
      </Button>
    );
  }

  onClick () {
    Materialize.toast(this.props.toast, 1000);
  }
}

Toast.propTypes = {
  toast: PropTypes.string.isRequired,
  children: PropTypes.node,
  rounded: PropTypes.bool
};

export default Toast;
