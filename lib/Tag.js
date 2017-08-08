'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Chip2.default,
    { close: true },
    children
  );
};

Tag.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Tag;