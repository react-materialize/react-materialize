"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line react/prop-types
var Wrapper = function Wrapper(_ref) {
  var condition = _ref.condition,
      children = _ref.children;
  return condition ? /*#__PURE__*/_react.default.createElement("div", {
    className: "card-stacked"
  }, children) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children);
};

var Card = function Card(_ref2) {
  var title = _ref2.title,
      header = _ref2.header,
      className = _ref2.className,
      textClassName = _ref2.textClassName,
      actions = _ref2.actions,
      reveal = _ref2.reveal,
      children = _ref2.children,
      horizontal = _ref2.horizontal,
      closeIcon = _ref2.closeIcon,
      revealIcon = _ref2.revealIcon,
      other = _objectWithoutProperties(_ref2, ["title", "header", "className", "textClassName", "actions", "reveal", "children", "horizontal", "closeIcon", "revealIcon"]);

  var classes = {
    card: true,
    horizontal: horizontal
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
    className: (0, _classnames.default)(className, classes)
  }), header, /*#__PURE__*/_react.default.createElement(Wrapper, {
    condition: horizontal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('card-content', textClassName)
  }, title && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('card-title', {
      activator: reveal
    })
  }, title, reveal && (0, _react.cloneElement)(revealIcon, {
    right: true
  })), /*#__PURE__*/_react.default.createElement("div", null, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-reveal"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "card-title"
  }, title, (0, _react.cloneElement)(closeIcon, {
    right: true
  })), reveal), actions && /*#__PURE__*/_react.default.createElement("div", {
    className: "card-action"
  }, actions)));
};

Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  textClassName: _propTypes.default.string,
  reveal: _propTypes.default.element,
  header: _propTypes.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes.default.arrayOf(_propTypes.default.element),
  horizontal: _propTypes.default.bool,

  /**
   * @default <Icon>close</Icon>
   */
  closeIcon: _propTypes.default.node,

  /**
   * @default <Icon>more_vert</Icon>
   */
  revealIcon: _propTypes.default.node
};
Card.defaultProps = {
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "close"),
  revealIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "more_vert")
};
var _default = Card;
exports.default = _default;