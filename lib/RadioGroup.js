"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadioGroup = function RadioGroup(_ref) {
  var onChange = _ref.onChange,
      withGap = _ref.withGap,
      disabled = _ref.disabled,
      name = _ref.name,
      radioClassNames = _ref.radioClassNames,
      value = _ref.value,
      options = _ref.options;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options.map(function (radioItem, idx) {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: radioClassNames,
      htmlFor: "radio".concat(idx),
      key: "radio".concat(idx)
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: "radio".concat(idx),
      value: radioItem.value,
      type: "radio",
      checked: radioItem.value === value,
      name: name,
      onChange: onChange,
      disabled: disabled,
      className: (0, _classnames.default)({
        'with-gap': withGap
      })
    }), /*#__PURE__*/_react.default.createElement("span", null, radioItem.label));
  }));
};

RadioGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,

  /**
   * predefined checked value
   */
  value: _propTypes.default.string,

  /**
   * radio group name
   */
  name: _propTypes.default.string,

  /**
   * with-gap styled checkbox
   */
  withGap: _propTypes.default.bool,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * classnames passed to label wrapper
   */
  radioClassNames: _propTypes.default.string
};
var _default = RadioGroup;
exports.default = _default;