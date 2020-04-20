"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = _react.default.forwardRef(function (props, ref) {
  // eslint-disable-next-line react/prop-types
  var dataLength = props['data-length'];
  var inputRef = ref || (0, _react.createRef)(null);
  (0, _react.useEffect)(function () {
    if (inputRef && dataLength) {
      M.CharacterCounter.init(inputRef.current);
    }
  }, [dataLength, inputRef]);
  (0, _react.useEffect)(function () {
    M.updateTextFields();
  }, [props]);

  var children = props.children,
      s = props.s,
      m = props.m,
      l = props.l,
      xl = props.xl,
      disabled = props.disabled,
      noLayout = props.noLayout,
      placeholder = props.placeholder,
      icon = props.icon,
      label = props.label,
      inputClassName = props.inputClassName,
      success = props.success,
      error = props.error,
      password = props.password,
      email = props.email,
      validate = props.validate,
      defaultValue = props.defaultValue,
      value = props.value,
      type = props.type,
      other = _objectWithoutProperties(props, ["children", "s", "m", "l", "xl", "disabled", "noLayout", "placeholder", "icon", "label", "inputClassName", "success", "error", "password", "email", "validate", "defaultValue", "value", "type"]);

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
    value: value,
    defaultValue: defaultValue,
    disabled: disabled
  }, other);

  var renderLabel = function renderLabel() {
    return label && /*#__PURE__*/_react.default.createElement("label", {
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
    return (error || success) && /*#__PURE__*/_react.default.createElement("span", {
      className: "helper-text",
      "data-error": error,
      "data-success": success
    });
  };

  var renderIcon = function renderIcon() {
    if (!icon) return;

    if (typeof icon === 'string') {
      return /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons prefix"
      }, icon);
    }

    return _react.default.cloneElement(icon, {
      className: 'prefix'
    });
  };

  if (type === 'file') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(wrapperClasses, " file-field")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn"
    }, /*#__PURE__*/_react.default.createElement("span", null, label), /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "file",
      className: (0, _classnames.default)({
        validate: validate
      }, inputClassName)
    }, inputProps))), /*#__PURE__*/_react.default.createElement("div", {
      className: "file-path-wrapper"
    }, /*#__PURE__*/_react.default.createElement("input", {
      className: "file-path validate",
      type: "text"
    })), renderHelper(), children);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses
  }, renderIcon(), /*#__PURE__*/_react.default.createElement("input", _extends({
    ref: inputRef,
    className: (0, _classnames.default)({
      validate: validate
    }, inputClassName)
  }, inputProps)), renderLabel(), renderHelper(), children);
});

TextInput.displayName = 'TextInput';
TextInput.propTypes = {
  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /**
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /**
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /**
   *  Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * prefix icon, name of the icon or a node
   */
  icon: _propTypes.default.node,

  /**
   * label text
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /**
   * Input value
   */
  value: _propTypes.default.string,

  /**
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /**
   * Custom success message
   */
  success: _propTypes.default.string,

  /**
   * Custom error message
   */
  error: _propTypes.default.string,

  /**
   * Additional classes for input
   */
  inputClassName: _propTypes.default.string,

  /**
   * override type="text"
   */
  type: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * password type
   */
  password: _propTypes.default.bool,

  /**
   * email type
   */
  email: _propTypes.default.bool,

  /**
   * children
   */
  children: _propTypes.default.node
};
TextInput.defaultProps = {
  id: "TextInput-".concat((0, _idgen.default)())
};
var _default = TextInput;
exports.default = _default;