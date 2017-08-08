'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close;

  return _react2.default.createElement(
    'div',
    { className: 'chip' },
    children,
    close ? _react2.default.createElement(
      'i',
      { className: 'close material-icons' },
      'close'
    ) : null
  );
};

Chip.propTypes = {
  children: _propTypes2.default.node,
  /**
   * If show a close icon
   * @default false
   */
  close: _propTypes2.default.bool
};

exports.default = Chip;