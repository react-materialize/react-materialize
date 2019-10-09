"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is just a holder for the props and children for tab, thus
// there is no logic here.
var Tab = function Tab(_ref) {
  var children = _ref.children,
      idx = _ref.idx,
      className = _ref.className;
  return _react.default.createElement(_Col.default, {
    id: "tab_".concat(idx),
    s: 12,
    className: className
  }, children);
};

Tab.propTypes = {
  children: _propTypes.default.node,
  idx: _propTypes.default.string,
  className: _propTypes.default.string
};
Tab.defaultProps = {
  active: false,
  disabled: false
};
var _default = Tab;
exports.default = _default;