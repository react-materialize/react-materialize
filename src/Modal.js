var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Modal = React.createClass({
  propTypes: {
    header: React.PropTypes.string
  },
  render() {
    return (
      <div className='modal'>
        <h4>{this.props.header}</h4>
        {this.props.children}
        <a href='#' className='waves-effect btn-flat modal_close'>Agree</a>
      </div>
    );
  }
});

module.exports = Modal;
