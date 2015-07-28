var React = require('react/addons'),
    constants = require('./constants');

var cx = React.addons.classSet;
var Icon = React.createClass({
  propTypes: {
    placement: React.PropTypes.oneOf(['left', 'right']),
    mdi: React.PropTypes.oneOf(constants.ICONS).isRequired
  },
  render() {
    var classes = {};
    if (this.props.placement) {
      classes[this.props.placement] = true;
    }
    classes['mdi-' + this.props.mdi] = true;
    return <i className={cx(classes)}></i>;
  }
});

module.exports = Icon;
