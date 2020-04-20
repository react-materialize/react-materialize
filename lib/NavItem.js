"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      props = _objectWithoutProperties(_ref, ["divider"]);

  if (divider) return /*#__PURE__*/_react.default.createElement("li", {
    className: "divider"
  });
  return /*#__PURE__*/_react.default.createElement("a", props);
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  divider: _propTypes.default.bool,
  href: _propTypes.default.string,

  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes.default.func
};
var _default = NavItem;
exports.default = _default;