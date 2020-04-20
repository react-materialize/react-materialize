"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimePicker = function TimePicker(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["onChange", "options"]);

  var timeEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _options = onChange ? _objectSpread({}, options, {
      onSelect: onChange
    }) : options;

    var instance = M.Timepicker.init(timeEl.current, _options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, onChange]);
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    ref: timeEl,
    inputClassName: "timepicker"
  }, props));
};

TimePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to Timepicker, also used for init method
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#time-picker
   */
  options: _propTypes.default.shape({
    /**
     * Duration of the transition from/to the hours/minutes view.
     * @default 350
     */
    duration: _propTypes.default.number,

    /**
     * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.string,

    /**
     * Show the clear button in the Timepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Default time to set on the timepicker 'now' or '13:14'
     * @default 'now'
     */
    defaultTime: _propTypes.default.string,

    /**
     * Millisecond offset from the defaultTime.
     * @default 0
     */
    fromNow: _propTypes.default.number,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string
    }),

    /**
     * Automatically close picker when minute is selected.
     * @default false
     */
    autoClose: _propTypes.default.bool,

    /**
     * Use 12 hour AM/PM clock instead of 24 hour clock.
     * @default true
     */
    twelveHour: _propTypes.default.bool,

    /**
     * Vibrate device when dragging clock hand.
     * @default true
     */
    vibrate: _propTypes.default.bool,

    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     * @default null
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     * @default null
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Callback function when a time is selected, first parameter is the hour and the second is the minute.
     * @default null
     */
    onSelect: _propTypes.default.func
  })
};
TimePicker.defaultProps = {
  id: "TimePicker-".concat((0, _idgen.default)()),
  options: {
    duration: 350,
    container: null,
    showClearBtn: false,
    defaultTime: 'now',
    fromNow: 0,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },
    autoClose: false,
    twelveHour: true,
    vibrate: true,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  }
};
var _default = TimePicker;
exports.default = _default;