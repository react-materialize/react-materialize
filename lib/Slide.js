"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("li", null, image, children);
};

Slide.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * The image that will be used in the Slide
   */
  image: _propTypes.default.node.isRequired
};
var _default = Slide;
exports.default = _default;