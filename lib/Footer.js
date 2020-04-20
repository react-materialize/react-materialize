"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Row = _interopRequireDefault(require("./Row"));

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      copyrights = _ref.copyrights,
      links = _ref.links,
      moreLinks = _ref.moreLinks,
      props = _objectWithoutProperties(_ref, ["children", "className", "copyrights", "links", "moreLinks"]);

  var classes = {
    'page-footer': true
  };
  return /*#__PURE__*/_react.default.createElement("footer", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    l: 6,
    s: 12
  }, children), /*#__PURE__*/_react.default.createElement(_Col.default, {
    l: 4,
    s: 12,
    offset: "l2"
  }, links))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-copyright"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, copyrights, moreLinks)));
};

Footer.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  copyrights: _propTypes.default.string,
  links: _propTypes.default.node,
  moreLinks: _propTypes.default.node
};
var _default = Footer;
exports.default = _default;