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

var DatePicker = function DatePicker(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["options", "onChange"]);

  var dateEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _options = onChange ? _objectSpread({}, options, {
      onSelect: onChange
    }) : options;

    var instance = M.Datepicker.init(dateEl.current, _options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, onChange]);
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    ref: dateEl,
    inputClassName: "datepicker"
  }, rest));
};

DatePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to datepicker, also used for init method
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#date-picker
   */
  options: _propTypes.default.shape({
    /**
     * Automatically close picker when date is selected.
     */
    autoClose: _propTypes.default.bool,

    /**
     * The date output format for the input field value.
     * @default 'mmm dd, yyyy'
     */
    format: _propTypes.default.string,

    /**
     * Used to create date object from current input string.
     * @default null
     */
    parse: _propTypes.default.func,

    /**
     * The initial date to view when first opened.
     * @default null
     */
    defaultDate: _propTypes.default.any,

    /**
     * Make the defaultDate the initial selected value.
     * @default false
     */
    setDefaultDate: _propTypes.default.bool,

    /**
     * Prevent selection of any date on the weekend.
     * @default false
     */
    disableWeekends: _propTypes.default.bool,

    /**
     * Custom function to disable certain days.
     * @default null
     */
    disableDayFn: _propTypes.default.func,

    /**
     * First day of week (0: Sunday, 1: Monday etc).
     * @default 0
     */
    firstDay: _propTypes.default.number,

    /**
     * The earliest date that can be selected.
     * @default null
     */
    minDate: _propTypes.default.any,

    /**
     * The latest date that can be selected.
     * @default null
     */
    maxDate: _propTypes.default.any,

    /**
     * Number of years either side, or array of upper/lower range.
     * @default 10
     */
    yearRange: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.array]),

    /**
     * Changes Datepicker to RTL.
     * @default false
     */
    isRTL: _propTypes.default.bool,

    /**
     * Show month after year in Datepicker title.
     * @default false
     */
    showMonthAfterYear: _propTypes.default.bool,

    /**
     * Render days of the calendar grid that fall in the next or previous month.
     * @default false
     */
    showDaysInNextAndPreviousMonths: _propTypes.default.bool,

    /**
     * Specify a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.any,

    /**
     * Show the clear button in the datepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string,
      previousMonth: _propTypes.default.string,
      nextMonth: _propTypes.default.string,
      months: _propTypes.default.arrayOf(_propTypes.default.string),
      monthsShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdays: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysAbbrev: _propTypes.default.arrayOf(_propTypes.default.string)
    }),

    /**
     * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
     * @default []
     */
    events: _propTypes.default.arrayOf(_propTypes.default.string),

    /**
     * Callback function when date is selected, first parameter is the newly selected date.
     * @default null
     */
    onSelect: _propTypes.default.func,

    /**
     * Callback function when Datepicker is opened.
     * @default null
     */
    onOpen: _propTypes.default.func,

    /**
     * Callback function when Datepicker is closed.
     * @default null
     */
    onClose: _propTypes.default.func,

    /**
     * Callback function when Datepicker HTML is refreshed.
     * @default null
     */
    onDraw: _propTypes.default.func
  })
};
DatePicker.defaultProps = {
  id: "DatePicker-".concat((0, _idgen.default)()),
  options: {
    autoClose: false,
    format: 'mmm dd, yyyy',
    parse: null,
    defaultDate: null,
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn: null,
    firstDay: 0,
    minDate: null,
    maxDate: null,
    yearRange: 10,
    isRTL: false,
    showMonthAfterYear: false,
    showDaysInNextAndPreviousMonths: false,
    container: null,
    showClearBtn: false,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    events: [],
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  }
};
var _default = DatePicker;
exports.default = _default;