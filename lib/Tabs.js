"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Row = _interopRequireDefault(require("./Row"));

var _Tab = _interopRequireDefault(require("./Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scope = "tabs-".concat((0, _idgen.default)());

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      onChange = _ref.onChange;

  var _tabsRef = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Tabs.init(_tabsRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)('tabs', className),
    ref: _tabsRef
  }, _react.default.Children.map(children, function (child, id) {
    var _classes;

    var idx = "".concat(scope).concat(id);
    var _child$props = child.props,
        active = _child$props.active,
        disabled = _child$props.disabled,
        tabWidth = _child$props.tabWidth,
        title = _child$props.title;
    var classes = (_classes = {}, _defineProperty(_classes, "s".concat(tabWidth), tabWidth), _defineProperty(_classes, "tab", true), _defineProperty(_classes, "disabled", disabled), _defineProperty(_classes, "col", true), _classes);
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)(classes),
      key: idx
    }, /*#__PURE__*/_react.default.createElement("a", _extends({
      href: "#tab_".concat(idx),
      className: active || defaultValue === idx ? 'active' : ''
    }, disabled ? {} : {
      onClick: onChange
    }), title));
  })), /*#__PURE__*/_react.default.createElement(_Row.default, null, _react.default.Children.map(children, function (child, id) {
    var idx = "".concat(scope).concat(id);
    return (0, _react.cloneElement)(child, {
      idx: idx
    });
  })));
};

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,

  /**
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  options: _propTypes.default.shape({
    /**
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: _propTypes.default.number,

    /**
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: _propTypes.default.func,

    /**
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: _propTypes.default.bool,

    /**
     * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
     * @default Infinity
     */
    responsiveThreshold: _propTypes.default.number
  })
};
_Tab.default.defaultProps = {
  options: {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  }
};
var _default = Tabs;
exports.default = _default;