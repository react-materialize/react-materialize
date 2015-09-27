var React = require('react'),
    cx = require('classnames');

var Panel = React.createClass({
  render() {
    var classes = {
      'card-panel': true
    };
    return (
      <div className={cx(this.props.className, classes)}
        {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;
