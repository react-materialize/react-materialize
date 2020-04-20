"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardTitle = function CardTitle(_ref) {
  var image = _ref.image,
      reveal = _ref.reveal,
      waves = _ref.waves,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["image", "reveal", "waves", "children"]);

  var classes = (0, _classnames.default)(_defineProperty({
    'card-image': true,
    'waves-effect': waves,
    'waves-block': waves
  }, "waves-".concat(waves), waves));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(classes)
  }, props), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)({
      activator: reveal
    }),
    src: image
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('card-title')
  }, children));
};

CardTitle.propTypes = {
  children: _propTypes.default.node,
  // Whether the image serves as activator for the reveal
  reveal: _propTypes.default.bool,
  // the waves effect
  waves: _propTypes.default.oneOf(_constants.default.WAVES),
  // The path to the image
  image: _propTypes.default.string.isRequired
};
var _default = CardTitle;
exports.default = _default;