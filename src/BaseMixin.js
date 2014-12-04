/** @jsx React.DOM */

var React = require('react/addons'),
    constants = require('./constants');

var BaseMixin = {
  propTypes: {
    mWaves: React.PropTypes.oneOf(Object.keys(constants.WAVES))
  },
  getClassSet: function() {
    var classes = {};
    var mWave = this.props.mClass && constants.WAVES[this.props.mClass];
    return classes;
  },
  cx: React.addons.classSet
};

module.exports = BaseMixin;
