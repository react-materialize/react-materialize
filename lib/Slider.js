"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slider = function Slider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      options = _ref.options,
      fullscreen = _ref.fullscreen,
      props = _objectWithoutProperties(_ref, ["children", "className", "options", "fullscreen"]);

  var sliderInstance = (0, _react.useRef)(null);

  var _slider = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    sliderInstance.current = M.Slider.init(_slider.current, options);
    return function () {
      if (sliderInstance.current) {
        setActiveIndex(sliderInstance.current.activeIndex);
        sliderInstance.current.destroy();
      }
    };
  }, [_slider, options, fullscreen]);
  (0, _react.useEffect)(function () {
    if (activeIndex) {
      if (typeof indicators === 'undefined' || options.indicators) {
        sliderInstance.current['$indicators'][activeIndex].className = 'indicator-item active';
      }
    }
  }, [activeIndex, options.indicators, fullscreen]);
  /**
   * If the slider was not in fullscreen, the height is set as a style attribute
   * on the Slider element. When `.destroy()` is called, this attribute is not
   * removed, resulting in a fullscreen displayed incorrectly.
   */

  (0, _react.useEffect)(function () {
    if (fullscreen) {
      _slider.current.removeAttribute('style');

      _slider.current.childNodes[0].removeAttribute('style');
    }
  }, [fullscreen]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: _slider,
    className: (0, _classnames.default)('slider', className, {
      fullscreen: fullscreen
    })
  }, props), /*#__PURE__*/_react.default.createElement("ul", {
    className: "slides"
  }, children));
};

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