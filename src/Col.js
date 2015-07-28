var React = require('react/addons'),
    constants = require('./constants');

var cx = React.addons.classSet;

var Col = React.createClass({
  propTypes: {
    node: React.PropTypes.node.isRequired,
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    offset: React.PropTypes.string
  },
  getDefaultProps() {
    return {node: 'div'};
  },
  render() {
    var C = this.props.node;
    var classes = {col: true};
    constants.SIZES.forEach(s => {
      if (this.props[s]) {
        classes[s + this.props[s]] = true;
      }
    });

    if (this.props.offset) {
      this.props.offset.split(' ').forEach(offset => {
        classes['offset-' + offset] = true;
      });
    }
    return (
      <C {...this.props} className={cx(classes)}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Col;
