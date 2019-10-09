"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function PaginationButton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      href = _ref.href,
      onSelect = _ref.onSelect;
  var classes = {
    'waves-effect': true,
    disabled: disabled,
    active: active
  };
  var linkProps = href ? {
    href: href
  } : null;
  return _react.default.createElement("li", {
    className: (0, _classnames.default)(classes, className),
    onClick: onSelect
  }, _react.default.createElement("a", linkProps, children));
};

PaginationButton.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = PaginationButton;
exports.default = _default;