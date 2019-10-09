"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Caption = function Caption(_ref) {
  var className = _ref.className,
      placement = _ref.placement,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "placement", "children"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('caption', "".concat(placement, "-align"), className)
  }, props), children);
};

Caption.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Placement of the caption
   * @default 'center'
   */
  placement: _propTypes.default.oneOf(_constants.default.PLACEMENTS)
};
Caption.defaultProps = {
  placement: 'center'
};
var _default = Caption;
exports.default = _default;