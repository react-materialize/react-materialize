var React = require('react/addons'),
    cx = require('classnames');

var Button = require('./Button');
var Materialize = require('imports?jQuery=jquery!materialize-css/bin/materialize.js');

class Toast extends React.Component{
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

export default Toast;
