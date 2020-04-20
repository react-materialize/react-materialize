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

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      className = _ref.className,
      indeterminate = _ref.indeterminate,
      filledIn = _ref.filledIn,
      label = _ref.label,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "className", "indeterminate", "filledIn", "label", "onChange"]);

  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _input = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    if (_input.current) {
      _input.current.indeterminate = indeterminate;
      _input.current.checked = false;
      setChecked(false);
    }
  }, [indeterminate]);
  (0, _react.useEffect)(function () {
    setChecked(props.checked);
    _input.current.checked = props.checked;
  }, [props.checked]);
  return /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    id: id,
    className: (0, _classnames.default)({
      'filled-in': filledIn
    }, className),
    type: "checkbox",
    ref: _input,
    checked: checked,
    onChange: function onChange(e) {
      setChecked(function (prevChecked) {
        return !prevChecked;
      });
      _onChange && _onChange(e);
    }
  })), /*#__PURE__*/_react.default.createElement("span", null, label));
};

Checkbox.propTypes = {
  className: _propTypes.default.string,

  /**
   * checkbox value
   */
  value: _propTypes.default.string.isRequired,

  /**
   * filled-in styled checkbox
   */
  filledIn: _propTypes.default.bool,

  /**
   * label next to checkbox
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Indeterminate Style
   */
  indeterminate: _propTypes.default.bool,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: _propTypes.default.bool
};
Checkbox.defaultProps = {
  id: "Checkbox_".concat((0, _idgen.default)())
};
var _default = Checkbox;
exports.default = _default;