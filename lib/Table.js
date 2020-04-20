"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(_ref) {
  var centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      hoverable = _ref.hoverable,
      responsive = _ref.responsive,
      striped = _ref.striped,
      props = _objectWithoutProperties(_ref, ["centered", "children", "className", "hoverable", "responsive", "striped"]);

  var classes = {
    centered: centered,
    highlight: hoverable,
    'responsive-table': responsive,
    striped: striped
  };
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), children);
};

Table.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Center align all the text in the table
   * @default false
   */
  centered: _propTypes.default.bool,

  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: _propTypes.default.bool,

  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: _propTypes.default.bool,

  /**
   * striped style
   * @default false
   */
  striped: _propTypes.default.bool
};
var _default = Table;
exports.default = _default;