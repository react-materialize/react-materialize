var React = require('react');

var Row = React.createClass({
  propTypes: {
    node: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {node: 'div'};
  },

  render() {
    var C = this.props.node;
    return (
      <C className={joinClasses('row', this.props.className)}
        {...this.props}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Row;
