"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = function Spinner(_ref) {
  var _cx;

  var color = _ref.color,
      only = _ref.only,
      className = _ref.className;
  var spinnerClasses = (0, _classnames.default)('spinner-layer', (_cx = {}, _defineProperty(_cx, "spinner-".concat(color, "-only"), only), _defineProperty(_cx, "spinner-".concat(color), !only), _cx));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(spinnerClasses, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle-clipper left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "gap-patch"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "circle-clipper right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })));
};

Spinner.defaultProps = {
  only: true
};
Spinner.propTypes = {
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  only: _propTypes.default.bool
};
var _default = Spinner;
exports.default = _default;