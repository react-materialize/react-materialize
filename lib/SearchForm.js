"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm(_ref) {
  var searchIcon = _ref.searchIcon,
      closeIcon = _ref.closeIcon,
      _onChange = _ref.onChange,
      value = _ref.value;
  return _react.default.createElement("form", null, _react.default.createElement(_TextInput.default, {
    label: searchIcon,
    type: "search",
    onChange: function onChange(e) {
      return typeof _onChange == 'function' ? _onChange(e) : false;
    }
  }, closeIcon));
};

SearchForm.propTypes = {
  searchIcon: _propTypes.default.node.isRequired,
  closeIcon: _propTypes.default.node.isRequired,
  onChange: _propTypes.default.func
};
SearchForm.defaultProps = {
  searchIcon: _react.default.createElement(_Icon.default, null, "search"),
  closeIcon: _react.default.createElement(_Icon.default, null, "close"),
  onChange: null
};
var _default = SearchForm;
exports.default = _default;