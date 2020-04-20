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

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      caption = _ref.caption,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "newIcon", "caption", "children"]);

  var classes = {
    badge: true,
    new: newIcon
  };
  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    "data-badge-caption": caption,
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Badge.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes.default.bool,

  /**
   * One can explicitly set the caption in a badge using the caption prop
   */
  caption: _propTypes.default.string
};
var _default = Badge;
exports.default = _default;