"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      offLabel = _ref.offLabel,
      onLabel = _ref.onLabel,
      props = _objectWithoutProperties(_ref, ["id", "checked", "onChange", "disabled", "offLabel", "onLabel"]);

  return _react.default.createElement("div", {
    className: "switch"
  }, _react.default.createElement("label", {
    htmlFor: id
  }, offLabel, _react.default.createElement("input", _extends({
    id: id,
    disabled: disabled,
    onChange: onChange,
    type: "checkbox",
    checked: checked
  }, props)), _react.default.createElement("span", {
    className: "lever"
  }), onLabel));
};

Switch.propTypes = {
  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,

  /*
   * label for off
   */
  offLabel: _propTypes.default.string.isRequired,

  /*
   * label for on
   */
  onLabel: _propTypes.default.string.isRequired,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * initialise checkbox checked
   */
  checked: _propTypes.default.bool
};
Switch.defaultProps = {
  id: "switch-".concat((0, _idgen.default)()),
  onChange: function onChange() {}
};
var _default = Switch;
exports.default = _default;