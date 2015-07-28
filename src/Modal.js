var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses'),
    Button = require('./Button');

var cx = React.addons.classSet;

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
      zIndex: 1050
    };
    var modal = (
      <div className='modal' {...props} style={style}>
        <h4>{header}</h4>
        <p>{children}</p>
        <Button onClick={this.props.onRequestHide} waves='light' flat>Agree</Button>
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
  },

  handleBackdropClick(e) {
    e.preventDefault();
    this.props.onRequestHide();
  }
});

module.exports = Modal;
