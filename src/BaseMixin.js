/** @jsx React.DOM */

var React = require('react/addons');

var BaseMixin = {
  propTypes: {
    mWaves: React.PropTypes.oneOf(Object.keys(constants.WAVES))
  },
  getClassSet() {
    var classes = {};
    var mWave = this.props.mClass && constants.WAVES[this.props.mClass];
    return classes;
  }
};

module.exports = BaseMixin;
