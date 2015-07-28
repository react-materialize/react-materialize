var React = require('react'),
    joinClasses = require('react/lib/joinClasses');

var cx = React.addons.classSet;
var Panel = React.createClass({
  render() {
    var classes = {
      'card-panel': true
    };
    return (
      <div className={joinClasses(this.props.className, cx(classes))}
        {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;
