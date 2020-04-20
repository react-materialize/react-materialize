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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = function Textarea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      noLayout = _ref.noLayout,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      label = _ref.label,
      success = _ref.success,
      error = _ref.error,
      iconClassName = _ref.iconClassName,
      onChange = _ref.onChange,
      validate = _ref.validate,
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["children", "className", "s", "m", "l", "xl", "noLayout", "placeholder", "icon", "label", "success", "error", "iconClassName", "onChange", "validate", "defaultValue", "value", "id"]);

  var textareaRef = (0, _react.useRef)(null);
  var dataLength = rest['data-length'];
  (0, _react.useEffect)(function () {
    if (dataLength) {
      M.CharacterCounter.init(textareaRef.current);
    }
  }, [dataLength]);
  (0, _react.useEffect)(function () {
    M.textareaAutoResize(textareaRef.current);
  }, []);
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('input-field', responsiveClasses)
  }, Boolean(icon) && _react.default.cloneElement(icon, {
    className: 'prefix'
  }), /*#__PURE__*/_react.default.createElement("textarea", _extends({
    placeholder: placeholder,
    id: id,
    value: value,
    defaultValue: defaultValue,
    ref: textareaRef,
    onChange: onChange
  }, rest, {
    className: (0, _classnames.default)('materialize-textarea', {
      validate: validate
    }, className)
  })), Boolean(label) && /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)({
      active: value || placeholder,
      'label-icon': typeof label !== 'string'
    }),
    "data-success": success,
    "data-error": error,
    htmlFor: id
  }, label), [error || success] && /*#__PURE__*/_react.default.createElement("span", {
    className: "helper-text",
    "data-error": error,
    "data-success": success
  }), children);
};

Textarea.propTypes = {
  children: _propTypes.default.node,

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
   * Responsive size for Desktop Devices
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
   * render icon next to input
   */
  icon: _propTypes.default.node,

  /**
   * icon classname
   */
  iconClassName: _propTypes.default.string,

  /**
   * textarea label
   */
  label: _propTypes.default.string,

  /**
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /**
   * predefined value
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
   * textarea classname
   */
  className: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func
};
Textarea.defaultProps = {
  id: "Textarea-".concat((0, _idgen.default)())
};
var _default = Textarea;
exports.default = _default;