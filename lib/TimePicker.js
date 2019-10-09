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

var TimePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));
    _this.id = props.id || "timepicker".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var onChange = this.props.onChange;
        var elem = document.getElementById(this.id);
        var options = onChange ? _objectSpread({}, this.props.options, {
          onSelect: onChange
        }) : this.props.options;
        this.instance = M.Timepicker.init(elem, options);
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
      return _react.default.createElement(_TextInput.default, _extends({
        id: this.id,
        inputClassName: "timepicker"
      }, this.props));
    }
  }]);

  return TimePicker;
}(_react.default.Component);

TimePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to Timepicker, also used for init method
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