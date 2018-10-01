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

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'close', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)('chip', className) }, props),
    children,
    close ? _react2.default.createElement(
      'i',
      { className: 'close material-icons' },
      'close'
    ) : null
  );
};

Chip.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * Shows a close icon
   */
  close: _propTypes2.default.bool
};

Chip.defaultProps = {
  close: false
};

exports.default = Chip;