var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Table = React.createClass({
  propTypes: {
    centered: React.PropTypes.bool,
    hoverable: React.PropTypes.bool,
    stripped: React.PropTypes.bool,
    bordered: React.PropTypes.bool
  },
  render() {
    var classes = {
      centered: this.props.centered,
      hoverable: this.props.hoverable,
      stripped: this.props.stripped,
      bordered: this.props.bordered
    };
    return (
      <table className={joinClasses(this.props.className, cx(classes))} {...this.props}>
        {this.props.children}
      </table>
    );
  }
});
