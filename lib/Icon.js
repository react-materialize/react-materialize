'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = {
        'material-icons': true
      };
      _constants2.default.PLACEMENTS.forEach(function (p) {
        classes[p] = _this2.props[p];
      });
      _constants2.default.ICON_SIZES.forEach(function (s) {
        classes[s] = _this2.props[s];
      });
      return _react2.default.createElement(
        'i',
        { className: (0, _classnames2.default)(classes, this.props.className) },
        this.props.children
      );
    }
  }]);

  return Icon;
}(_react2.default.Component);

Icon.propTypes = {
  /*
   * Classname passed to i tag
   */
  className: _propTypes2.default.string,
  /*
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes2.default.string,
  /*
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes2.default.bool,
  center: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  /*
   * Sizes for icons ↓
   */
  tiny: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};

exports.default = Icon;