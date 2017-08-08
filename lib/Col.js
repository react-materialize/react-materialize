'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      C = _ref$node === undefined ? 'div' : _ref$node,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      offset = _ref.offset,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'node', 's', 'm', 'l', 'offset']);

  var sizes = { s: s, m: m, l: l };
  var classes = { col: true };
  _constants2.default.SIZES.forEach(function (size) {
    classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(function (off) {
      classes['offset-' + off] = true;
    });
  }

  return _react2.default.createElement(
    C,
    _extends({}, other, { className: (0, _classnames2.default)(classes, className) }),
    children
  );
};

Col.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Columns for large size screens
   */
  l: _propTypes2.default.number,
  /**
   * Columns for middle size screens
   */
  m: _propTypes2.default.number,
  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes2.default.node,
  /**
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: _propTypes2.default.string,
  /**
   * Columns for small size screens
   */
  s: _propTypes2.default.number
};

exports.default = Col;