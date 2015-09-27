var React = require('react/addons'),
    cx = require('classnames');

var Toast = React.createClass({
  propTypes: {
    rounded: React.PropTypes.bool
  },

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
      <div className={cx(className, classes)} style={style}>
        <span>
          {children}
        </span>
      </div>
    );
  }
});

module.exports = Toast;
