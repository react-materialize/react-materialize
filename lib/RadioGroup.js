"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var RadioGroup = function RadioGroup(_ref) {
  var onChange = _ref.onChange,
      withGap = _ref.withGap,
      disabled = _ref.disabled,
      name = _ref.name,
      radioClassNames = _ref.radioClassNames,
      value = _ref.value,
      options = _ref.options;
  return _react.default.createElement(_react.default.Fragment, null, options.map(function (radioItem, idx) {
    return _react.default.createElement("label", {
      className: radioClassNames,
      htmlFor: "radio".concat(idx),
      key: "radio".concat(idx)
    }, _react.default.createElement("input", {
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
    }), _react.default.createElement("span", null, radioItem.label));
  }));
};

RadioGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,

  /*
   * predefined checked value
   */
  value: _propTypes.default.string,

  /*
   * radio group name
   */
  name: _propTypes.default.string,

  /*
   * with-gap styled checkbox
   */
  withGap: _propTypes.default.bool,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * classnames passed to label wrapper
   */
  radioClassNames: _propTypes.default.string
};
var _default = RadioGroup;
exports.default = _default;