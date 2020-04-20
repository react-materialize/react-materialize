"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = _interopRequireDefault(require("./constants"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  var classes = {
    'material-icons': true
  };

  _constants.default.PLACEMENTS.forEach(function (p) {
    classes[p] = props[p];
  });

  _constants.default.ICON_SIZES.forEach(function (s) {
    classes[s] = props[s];
  });

  return /*#__PURE__*/_react.default.createElement("i", {
    className: (0, _classnames.default)(classes, props.className)
  }, props.children);
};

Icon.propTypes = {
  /**
   * Classname passed to i tag
   */
  className: _propTypes.default.string,

  /**
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes.default.string.isRequired,

  /**
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes.default.bool,
  center: _propTypes.default.bool,
  right: _propTypes.default.bool,

  /**
   * Sizes for icons ↓
   */
  tiny: _propTypes.default.bool,
  small: _propTypes.default.bool,
  medium: _propTypes.default.bool,
  large: _propTypes.default.bool
};
var _default = Icon;
exports.default = _default;