"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader =
/*#__PURE__*/
function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preloader).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          size = _this$props.size,
          color = _this$props.color,
          flashing = _this$props.flashing,
          className = _this$props.className;
      var classes = (0, _classnames.default)('preloader-wrapper', {
        active: active,
        size: size
      });
      var spinners;

      if (flashing) {
        spinners = colors.map(function (color) {
          return _react.default.createElement(_Spinner.default, {
            color: color,
            only: false,
            key: color
          });
        });
      } else {
        spinners = _react.default.createElement(_Spinner.default, {
          color: color
        });
      }

      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, classes)
      }, spinners);
    }
  }]);

  return Preloader;
}(_react.Component);

Preloader.propTypes = {
  className: _propTypes.default.string,

  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['big', 'small', 'medium']),

  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes.default.bool,

  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes.default.oneOf(['blue', 'red', 'yellow', 'green']),

  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes.default.bool
};
Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};
var _default = Preloader;
exports.default = _default;