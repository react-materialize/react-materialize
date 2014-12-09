var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Toast = React.createClass({
  render() {
    var classes = {
      toast: true
    };
    var style = {
      top: '35px',
      opacity: 0
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
