"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.initSlider = _this.initSlider.bind(_assertThisInitialized(_this));
    _this.fullscreenReset = _this.fullscreenReset.bind(_assertThisInitialized(_this));
    _this.setActiveIndex = _this.setActiveIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "initSlider",
    value: function initSlider() {
      if (typeof M !== 'undefined') {
        this.instance = M.Slider.init(this._slider, this.props.options);
      }
    }
    /**
     * If the slider was not in fullscreen, the height is set as a style attribute
     * on the Slider element. When `.destroy()` is called, this attribute is not
     * removed, resulting in a fullscreen displayed incorrectly.
     */

  }, {
    key: "fullscreenReset",
    value: function fullscreenReset(wasFullscreen) {
      if (!wasFullscreen && this.props.fullscreen) {
        this.instance.el.removeAttribute('style');
        this.instance.el.childNodes[0].removeAttribute('style');
      }
    }
  }, {
    key: "setActiveIndex",
    value: function setActiveIndex(activeIndex) {
      var indicators = this.props.options.indicators; // In case this option is not defined, we assume true, as per default

      var showIndicators = typeof indicators === 'undefined' || indicators;

      if (showIndicators && activeIndex) {
        this.instance['$indicators'][activeIndex].className = 'indicator-item active';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initSlider();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.instance) return;
      var activeIndex = this.instance.activeIndex;
      this.instance.destroy();
      this.fullscreenReset(prevProps.fullscreen);
      this.initSlider(); // keep indicator at current index displayed

      this.setActiveIndex(activeIndex);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fullscreen = _this$props.fullscreen,
          children = _this$props.children,
          className = _this$props.className;
      var classes = {
        fullscreen: fullscreen,
        slider: true
      };
      return _react.default.createElement("div", {
        ref: function ref(node) {
          return _this2._slider = node;
        },
        className: (0, _classnames.default)(classes, className)
      }, _react.default.createElement("ul", {
        className: "slides"
      }, children));
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Whether or not the Slider should be fullscreen
   * @default false
   */
  fullscreen: _propTypes.default.bool,
  options: _propTypes.default.shape({
    /**
     * Set to false to hide slide indicators
     * @default true
     */
    indicators: _propTypes.default.bool,

    /**
     * The interval between transitions in ms
     * @default 6000
     */
    interval: _propTypes.default.number,

    /**
     * The duration of the transation animation in ms
     * @default 500
     */
    duration: _propTypes.default.number,

    /**
     * The height of the Slider window
     * @default 400
     */
    height: _propTypes.default.number
  })
};
Slider.defaultProps = {
  fullscreen: false,
  options: {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  }
};
var _default = Slider;
exports.default = _default;