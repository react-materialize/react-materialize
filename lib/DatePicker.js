"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));
    _this.id = props.id || "datepicker".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var onChange = this.props.onChange;
        var elem = document.getElementById(this.id);
        var options = onChange ? _objectSpread({}, this.props.options, {
          onSelect: onChange
        }) : this.props.options;
        this.instance = M.Datepicker.init(elem, options);
      }
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
      var other = _extends({}, this.props);

      return _react.default.createElement(_TextInput.default, _extends({
        id: this.id,
        inputClassName: "datepicker"
      }, this.props));
    }
  }]);

  return DatePicker;
}(_react.default.Component);

DatePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to datepicker, also used for init method
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