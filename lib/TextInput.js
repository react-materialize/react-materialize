"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));
    _this.id = props.id || (0, _idgen.default)();

    if (props.password) {
      _this.id = "password".concat((0, _idgen.default)());
    }

    if (props.email) {
      _this.id = "email".concat((0, _idgen.default)());
    }

    return _this;
  }

  _createClass(TextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((typeof M === "undefined" ? "undefined" : _typeof(M)) !== undefined) {
        // eslint-disable-next-line react/prop-types
        this.props['data-length'] && M.CharacterCounter.init(this.inputRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (value !== prevProps.value && typeof M !== 'undefined') {
        M.updateTextFields();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          disabled = _this$props.disabled,
          noLayout = _this$props.noLayout,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          label = _this$props.label,
          inputClassName = _this$props.inputClassName,
          success = _this$props.success,
          error = _this$props.error,
          password = _this$props.password,
          email = _this$props.email,
          validate = _this$props.validate,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          type = _this$props.type,
          other = _objectWithoutProperties(_this$props, ["children", "s", "m", "l", "xl", "disabled", "noLayout", "placeholder", "icon", "label", "inputClassName", "success", "error", "password", "email", "validate", "defaultValue", "value", "type"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var responsiveClasses;

      if (!noLayout) {
        responsiveClasses = {
          col: true
        };

        _constants.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);
      var computedType;

      if (type) {
        computedType = type;
      } else if (password) {
        computedType = 'password';
      } else if (email) {
        computedType = 'email';
      } else {
        computedType = 'text';
      }

      var inputProps = _objectSpread({
        placeholder: placeholder,
        type: computedType,
        id: this.id,
        value: value,
        defaultValue: defaultValue,
        disabled: disabled
      }, other);

      var renderLabel = function renderLabel() {
        return label && _react.default.createElement("label", {
          className: (0, _classnames.default)({
            active: value || placeholder,
            'label-icon': typeof label !== 'string'
          }),
          "data-success": success,
          "data-error": error,
          htmlFor: inputProps.id
        }, label);
      };

      var renderHelper = function renderHelper() {
        return (error || success) && _react.default.createElement("span", {
          className: "helper-text",
          "data-error": error,
          "data-success": success
        });
      };

      var renderIcon = function renderIcon() {
        if (!icon) return;

        if (typeof icon === 'string') {
          return _react.default.createElement("i", {
            className: "material-icons prefix"
          }, icon);
        }

        return _react.default.cloneElement(icon, {
          className: 'prefix'
        });
      };

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, renderIcon(), _react.default.createElement("input", _extends({
        ref: function ref(el) {
          _this2.inputRef = el;
        },
        className: (0, _classnames.default)({
          validate: validate
        }, inputClassName)
      }, inputProps)), renderLabel(), renderHelper(), children);
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  children: _propTypes.default.node,

  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /*
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * prefix icon, name of the icon or a node
   */
  icon: _propTypes.default.node,

  /*
   * label text
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /*
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /*
   * Input value
   */
  value: _propTypes.default.string,

  /*
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /*
   * Custom success message
   */
  success: _propTypes.default.string,

  /*
   * Custom error message
   */
  error: _propTypes.default.string,

  /*
   * Additional classes for input
   */
  inputClassName: _propTypes.default.string,

  /*
   * override type="text"
   */
  type: _propTypes.default.string,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * password type
   */
  password: _propTypes.default.bool,

  /*
   * email type
   */
  email: _propTypes.default.bool
};
var _default = TextInput;
exports.default = _default;