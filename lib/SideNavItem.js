"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _UserView = _interopRequireWildcard(require("./UserView"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNavItem = function SideNavItem(_ref) {
  var divider = _ref.divider,
      subheader = _ref.subheader,
      userView = _ref.userView,
      icon = _ref.icon,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#!' : _ref$href,
      waves = _ref.waves,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["divider", "subheader", "userView", "icon", "href", "waves", "user", "children"]);

  var itemClasses = {
    divider: divider
  };
  var linkClasses = {
    subheader: subheader,
    'waves-effect': waves
  };
  return /*#__PURE__*/_react.default.createElement("li", _extends({
    className: (0, _classnames.default)(itemClasses)
  }, props), userView && user && /*#__PURE__*/_react.default.createElement(_UserView.default, user), !userView && /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)(linkClasses),
    href: href
  }, icon && _react.default.cloneElement(icon, {
    className: 'prefix'
  }), children));
};

SideNavItem.propTypes = {
  children: _propTypes.default.node,
  divider: _propTypes.default.bool,
  subheader: _propTypes.default.bool,
  userView: _propTypes.default.bool,
  waves: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.node,
  user: _propTypes.default.shape(_UserView.UserShape)
};
var _default = SideNavItem;
exports.default = _default;