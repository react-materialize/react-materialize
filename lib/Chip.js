"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close,
      closeIcon = _ref.closeIcon,
      className = _ref.className,
      options = _ref.options,
      other = _objectWithoutProperties(_ref, ["children", "close", "closeIcon", "className", "options"]);

  var instance = (0, _react.useRef)(null);
  var chipRef = (0, _react.useRef)(null);
  var classes = (0, _classnames.default)(className, {
    chip: !options,
    chips: options
  });
  var chipContent = options ? null : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children, close && closeIcon);
  (0, _react.useEffect)(function () {
    if (options) {
      instance.current = M.Chips.init(chipRef.current, options);
    }

    return function () {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, [options]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other, {
    ref: chipRef
  }), chipContent);
};

Chip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Shows a close icon
   */
  close: _propTypes.default.bool,
  closeIcon: _propTypes.default.node,

  /**
   * Options object for the Chip Javascript Plugin
   */
  options: _propTypes.default.shape({
    /**
     * Set the chip data
     */
    data: _propTypes.default.arrayOf(_propTypes.default.objectOf(_propTypes.default.string)),

    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: _propTypes.default.string,

    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: _propTypes.default.string,

    /**
     * Set autocomplete options.
     */
    autocompleteOptions: _propTypes.default.shape({
      /**
       * Data object defining autocomplete options with optional icon strings.
       */
      data: _propTypes.default.objectOf(_propTypes.default.string),

      /**
       * Limit of results the autocomplete shows.
       */
      limit: _propTypes.default.number,

      /**
       * Minimum number of characters before autocomplete starts.
       */
      minLength: _propTypes.default.number
    }),

    /**
     * Set chips limit.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for chip add.
     */
    onChipAdd: _propTypes.default.func,

    /**
     * Callback for chip select.
     */
    onChipSelect: _propTypes.default.func,

    /**
     * Callback for chip delete.
     */
    onChipDelete: _propTypes.default.func
  })
};
Chip.defaultProps = {
  close: false,
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "close"
  }, "close"),
  options: null
};
var _default = Chip;
exports.default = _default;