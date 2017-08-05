'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var color = _ref.color,
      only = _ref.only;

  var spinnerClasses = {
    'spinner-layer': true
  };
  if (only) {
    spinnerClasses['spinner-' + color + '-only'] = true;
  } else {
    spinnerClasses['spinner-' + color] = true;
  }
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(spinnerClasses) },
    _react2.default.createElement(
      'div',
      { className: 'circle-clipper left' },
      _react2.default.createElement('div', { className: 'circle' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'gap-patch' },
      _react2.default.createElement('div', { className: 'circle' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'circle-clipper right' },
      _react2.default.createElement('div', { className: 'circle' })
    )
  );
};

Spinner.defaultProps = {
  only: true
};

Spinner.propTypes = {
  color: _propTypes2.default.string,
  only: _propTypes2.default.bool
};

exports.default = Spinner;