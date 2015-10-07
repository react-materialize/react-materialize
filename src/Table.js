var React = require('react/addons'),
    cx = require('classnames');

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
      <table className={cx(this.props.className, classes)} {...this.props}>
        {this.props.children}
      </table>
    );
  }
});
