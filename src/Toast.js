var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

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
      <div className={joinClasses(className, cx(classes))} style={style}>
        <span>
          {children}
        </span>
      </div>
    );
  }
});

module.exports = Toast;
