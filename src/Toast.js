import React from 'react';
import cx from 'classnames';

import Button from './Button';

class Toast extends React.Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let classes = {
      toast: true,
      rounded: this.props.rounded
    };
    let {className, children, ...props} = this.props;
    return (
      <Button onClick={this.onClick} className={cx(classes)}>
        {children}
      </Button>
    );
  }

  onClick() {
    Materialize.toast(this.props.toast, 1000);
  }
}

Toast.propTypes = {
  toast: React.PropTypes.string.isRequired,
  rounded: React.PropTypes.bool
};

export default Toast;
