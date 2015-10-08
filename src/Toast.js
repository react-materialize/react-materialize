import React from 'react/addons';
import cx from 'classnames';

import Button from './Button';

export default class Toast extends React.Component{
  static propTypes = {
    toast: React.PropTypes.string.isRequired,
    rounded: React.PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    var classes = {
      toast: true,
      rounded: this.props.rounded
    };
    var style = {
      top: '35px',
      opacity: 1
    };
    var {className, children, ...props} = this.props;
    return (
      <Button onClick={this.onClick}>
        {children}
      </Button>
    );
  }

  onClick() {
    Materialize.toast(this.props.toast, 1000);
  }
}
