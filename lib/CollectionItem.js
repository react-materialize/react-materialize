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

var CollectionItem = function CollectionItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["active", "children", "className", "href"]);

  var item = _react.default.createElement("li", _extends({}, other, {
    className: (0, _classnames.default)('collection-item', className)
  }), children);

  if (href) {
    item = _react.default.createElement("a", _extends({}, other, {
      href: href,
      className: (0, _classnames.default)('collection-item', {
        active: active
      }, className)
    }), children);
  }

  return item;
};

CollectionItem.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /*
   * Default: false
   * For more information refer to : https://materializecss.com/collections.html#links
   */
  href: _propTypes.default.string
};
var _default = CollectionItem;
exports.default = _default;