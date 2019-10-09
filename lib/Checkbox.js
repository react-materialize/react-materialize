"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

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

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));
  }

  _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var indeterminate = this.props.indeterminate;

      if (this._input && indeterminate) {
        this._input.indeterminate = indeterminate;
        this._input.checked = false;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        this._input.indeterminate = this.props.indeterminate;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          indeterminate = _this$props.indeterminate,
          filledIn = _this$props.filledIn,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          value = _this$props.value,
          label = _this$props.label;
      var computedId = id || (0, _idgen.default)();

      if (indeterminate) {
        computedId = "indeterminate-checkbox-".concat((0, _idgen.default)());
      }

      return _react.default.createElement("label", {
        htmlFor: computedId
      }, _react.default.createElement("input", {
        id: computedId,
        className: (0, _classnames.default)({
          'filled-in': filledIn
        }, className),
        disabled: disabled,
        onChange: onChange,
        type: "checkbox",
        checked: checked,
        value: value,
        ref: function ref(input) {
          return _this._input = input;
        }
      }), _react.default.createElement("span", null, label));
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  className: _propTypes.default.string,

  /*
   * checkbox value
   */
  value: _propTypes.default.string.isRequired,

  /*
   * filled-in styled checkbox
   */
  filledIn: _propTypes.default.bool,

  /*
   * label next to checkbox
   */
  label: _propTypes.default.string.isRequired,

  /*
   * Indeterminate Style
   */
  indeterminate: _propTypes.default.bool,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: _propTypes.default.bool
};
var _default = Checkbox;
exports.default = _default;