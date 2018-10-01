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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'newIcon', 'children']);

  var classes = {
    badge: true,
    new: newIcon
  };

  return _react2.default.createElement(
    'span',
    _extends({}, props, { className: (0, _classnames2.default)(classes, className) }),
    children
  );
};

Badge.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes2.default.bool
};

exports.default = Badge;