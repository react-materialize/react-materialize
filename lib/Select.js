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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var id = _ref.id,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      noLayout = _ref.noLayout,
      browserDefault = _ref.browserDefault,
      icon = _ref.icon,
      label = _ref.label,
      className = _ref.className,
      success = _ref.success,
      error = _ref.error,
      validate = _ref.validate,
      children = _ref.children,
      multiple = _ref.multiple,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "s", "m", "l", "xl", "noLayout", "browserDefault", "icon", "label", "className", "success", "error", "validate", "children", "multiple", "options", "value", "onChange"]);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var _selectRef = (0, _react.useRef)(null);

  var _formSelectInstance = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    _formSelectInstance.current = M.FormSelect.init(_selectRef.current, options);
    return function () {
      _formSelectInstance.current && _formSelectInstance.current.destroy();
    };
  }, [options]);
  (0, _react.useEffect)(function () {
    setSelectedValue(value);
  }, [value]);
  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var responsiveClasses = {};

  if (!noLayout) {
    responsiveClasses = {
      col: true
    };

    _constants.default.SIZES.forEach(function (size) {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  var renderOption = function renderOption(child) {
    return (0, _react.cloneElement)(child, {
      key: child.props.value
    });
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    if (multiple) {
      value = _formSelectInstance.current.getSelectedValues();
    }

    onChange && onChange(e);
    setSelectedValue(value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('input-field', responsiveClasses)
  }, Boolean(icon) && (0, _react.cloneElement)(icon, {
    className: 'prefix'
  }), /*#__PURE__*/_react.default.createElement("select", _extends({}, props, {
    type: "select",
    id: id,
    value: selectedValue,
    ref: _selectRef,
    onChange: handleChange,
    className: (0, _classnames.default)(className, _defineProperty({
      validate: validate,
      multiple: multiple
    }, 'browser-default', browserDefault)),
    multiple: multiple
  }), _react.Children.map(children, renderOption)), Boolean(label) && /*#__PURE__*/_react.default.createElement("label", {
    "data-success": success,
    "data-error": error,
    htmlFor: id
  }, label));
};

Select.propTypes = {
  /**
   * Use browser default styles
   */
  browserDefault: _propTypes.default.bool,

  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /**
   * Responsive size for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * Responsive size for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Responsive size for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Responsive size for extra large screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * prefix icon
   */
  icon: _propTypes.default.node,

  /**
   * label text
   */
  label: _propTypes.default.string,

  /**
   * Input initial value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

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
  className: _propTypes.default.string,

  /**
   * override type="text"
   */
  type: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * Render a multiple dropdown,
   * use instance.getSelectedValues()
   * to get array of selected values
   */
  multiple: _propTypes.default.bool,
  children: _propTypes.default.any,

  /**
   * Options for the select
   * <a target="_blank" href="https://materializecss.com/select.html#options">https://materializecss.com/select.html</a>
   */
  options: _propTypes.default.shape({
    classes: _propTypes.default.string,

    /**
     * Options for the dropdown
     * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
     */
    dropdownOptions: _propTypes.default.shape({
      alignment: _propTypes.default.oneOf(['left', 'right']),
      autoTrigger: _propTypes.default.bool,
      constrainWidth: _propTypes.default.bool,
      coverTrigger: _propTypes.default.bool,
      closeOnClick: _propTypes.default.bool,
      hover: _propTypes.default.bool,
      inDuration: _propTypes.default.number,
      outDuration: _propTypes.default.number,
      onOpenStart: _propTypes.default.func,
      onOpenEnd: _propTypes.default.func,
      onCloseStart: _propTypes.default.func,
      onCloseEnd: _propTypes.default.func
    })
  })
};
Select.defaultProps = {
  id: "Select-".concat((0, _idgen.default)()),
  multiple: false,
  options: {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      constrainWidth: true,
      coverTrigger: true,
      closeOnClick: true,
      hover: false,
      inDuration: 150,
      outDuration: 250,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null
    }
  }
};
var _default = Select;
exports.default = _default;