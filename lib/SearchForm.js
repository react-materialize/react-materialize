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
      closeIcon = _ref.closeIcon;
  return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    label: searchIcon,
    type: "search"
  }, closeIcon));
};

SearchForm.propTypes = {
  searchIcon: _propTypes.default.node.isRequired,
  closeIcon: _propTypes.default.node.isRequired
};
SearchForm.defaultProps = {
  searchIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "search"),
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "close")
};
var _default = SearchForm;
exports.default = _default;