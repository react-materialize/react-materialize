"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var cols = _ref.cols,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: (0, _classnames.default)('row', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    s: cols
  }, _react.default.Children.map(children, function (item) {
    return _react.default.cloneElement(item, {
      className: 'breadcrumb'
    });
  }))));
};

Breadcrumb.propTypes = {
  children: _propTypes.default.node,

  /**
   * responsive col value
   * @default 12
   */
  cols: _propTypes.default.number,
  className: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  cols: 12
};
var _default = Breadcrumb;
exports.default = _default;