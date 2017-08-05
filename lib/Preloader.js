'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader = function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: 'render',
    value: function render() {
      var classes = {
        'preloader-wrapper': true,
        active: this.props.active
      };

      if (this.props.size) {
        classes[this.props.size] = true;
      }

      var spinners = void 0;
      if (this.props.flashing) {
        spinners = [];
        colors.map(function (color) {
          spinners.push(_react2.default.createElement(_Spinner2.default, { color: color, only: false, key: color }));
        });
      } else {
        spinners = _react2.default.createElement(_Spinner2.default, { color: this.props.color });
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(this.props.className, classes) },
        spinners
      );
    }
  }]);

  return Preloader;
}(_react.Component);

Preloader.propTypes = {
  className: _propTypes2.default.string,
  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes2.default.oneOf(['big', 'small', 'medium']),
  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes2.default.bool,
  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes2.default.oneOf(['blue', 'red', 'yellow', 'green']),
  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes2.default.bool
};

Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};

exports.default = Preloader;