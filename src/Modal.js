var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses'),
    Button = require('./Button');

var Modal = React.createClass({
  propTypes: {
    header: React.PropTypes.string
  },

  render() {
    var {header, children, ...props} = this.props;
    var style = {
      display: 'block',
      position: 'fixed',
      top: '10%',
      opacity: 1,
      zIndex: 1000
    };
    return (
      <div className='modal' {...props} style={style}>
        <h4>{header}</h4>
        <p>{children}</p>
        <Button onClick={this.props.onRequestHide} waves='light' flat>Agree</Button>
      </div>
    );
  }
});

module.exports = Modal;
