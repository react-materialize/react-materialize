"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNav = function SideNav(_ref) {
  var options = _ref.options,
      id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      trigger = _ref.trigger,
      fixed = _ref.fixed,
      props = _objectWithoutProperties(_ref, ["options", "id", "className", "children", "trigger", "fixed"]);

  var sidenavRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);
  var classNames = (0, _classnames.default)('sidenav', {
    'sidenav-fixed': fixed || !trigger
  }, className);
  (0, _react.useEffect)(function () {
    var instance = M.Sidenav.init(sidenavRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options]);
  var renderTrigger = (0, _react.useMemo)(function () {
    if (!trigger) return;
    var triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
    var classNames = (0, _classnames.default)(trigger.props.className, triggerView, 'sidenav-trigger');
    return _react.default.cloneElement(trigger, {
      ref: triggerRef,
      'data-target': id,
      className: classNames
    });
  }, [id, fixed, trigger]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, renderTrigger, /*#__PURE__*/_react.default.createElement("ul", _extends({
    ref: function ref(el) {
      return sidenavRef.current = el;
    },
    id: id,
    className: classNames
  }, props), children));
};

SideNav.propTypes = {
  /**
   * Adds sidenav-fixed class to sidenav
   */
  fixed: _propTypes.default.bool,

  /**
   * sidenav id. If none is passed, an id will be generated.
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes.default.node,

  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes.default.shape({
    edge: _propTypes.default.oneOf(['left', 'right']),
    draggable: _propTypes.default.bool,
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    onOpenStart: _propTypes.default.func,
    onOpenEnd: _propTypes.default.func,
    onCloseStart: _propTypes.default.func,
    onCloseEnd: _propTypes.default.func,
    preventScrolling: _propTypes.default.bool
  }),

  /**
   * Additional classes added to 'sidenav'
   */
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
SideNav.defaultProps = {
  id: "SideNav-".concat((0, _idgen.default)())
};
var _default = SideNav;
exports.default = _default;