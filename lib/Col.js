'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          _props$node = _props.node,
          C = _props$node === undefined ? 'div' : _props$node,
          s = _props.s,
          m = _props.m,
          l = _props.l,
          xl = _props.xl,
          offset = _props.offset,
          other = _objectWithoutProperties(_props, ['children', 'className', 'node', 's', 'm', 'l', 'xl', 'offset']);

      var sizes = { s: s, m: m, l: l, xl: xl };
      var classes = {
        col: true
      };

      _constants2.default.SIZES.forEach(function (size) {
        return classes[size + sizes[size]] = sizes[size];
      });

      if (offset) {
        offset.split(' ').forEach(function (off) {
          return classes['offset-' + off] = true;
        });
      }

      return _react2.default.createElement(
        C,
        _extends({}, other, { className: (0, _classnames2.default)(classes, className) }),
        children
      );
    }
  }]);

  return Col;
}(_react.Component);

Col.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes2.default.number,
  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes2.default.number,
  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes2.default.number,
  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes2.default.number,
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
  offset: _propTypes2.default.string
};

exports.default = Col;