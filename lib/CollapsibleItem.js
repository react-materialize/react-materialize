"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ["className", "eventKey", "expanded", "header", "children", "icon", "iconClassName", "node", "onSelect"]);

  return _react.default.createElement("li", _extends({
    className: (0, _classnames.default)(className, {
      active: expanded
    })
  }, props), _react.default.createElement(Node, {
    className: (0, _classnames.default)('collapsible-header', {
      active: expanded
    }),
    onClick: function onClick() {
      return onSelect(eventKey);
    }
  }, icon, header), _react.default.createElement("div", {
    className: "collapsible-body"
  }, children));
};

CollapsibleItem.propTypes = {
  header: _propTypes.default.any.isRequired,
  icon: _propTypes.default.node,
  iconClassName: _propTypes.default.string,
  children: _propTypes.default.node,
  onSelect: _propTypes.default.func,

  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes.default.bool,

  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes.default.any,
  className: _propTypes.default.string,

  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes.default.node
};
CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};
var _default = CollapsibleItem;
exports.default = _default;