'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm() {
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      'div',
      { className: 'input-field' },
      _react2.default.createElement('input', { id: 'search', type: 'search', required: true }),
      _react2.default.createElement(
        'label',
        { htmlFor: 'search' },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'search'
        )
      ),
      _react2.default.createElement(
        _Icon2.default,
        null,
        'close'
      )
    )
  );
};

exports.default = SearchForm;