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

var _SearchForm = _interopRequireDefault(require("./SearchForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navbar = function Navbar(_ref) {
  var id = _ref.id,
      children = _ref.children,
      brand = _ref.brand,
      className = _ref.className,
      extendWith = _ref.extendWith,
      fixed = _ref.fixed,
      alignLinks = _ref.alignLinks,
      centerLogo = _ref.centerLogo,
      search = _ref.search,
      menuIcon = _ref.menuIcon,
      sidenav = _ref.sidenav,
      options = _ref.options,
      centerChildren = _ref.centerChildren,
      props = _objectWithoutProperties(_ref, ["id", "children", "brand", "className", "extendWith", "fixed", "alignLinks", "centerLogo", "search", "menuIcon", "sidenav", "options", "centerChildren"]);

  var _sidenav = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Sidenav.init(_sidenav.current, options);
    return function () {
      instance && instance.destroy();
    };
  }, [options]);
  var brandClasses = (0, _classnames.default)({
    'brand-logo': true,
    right: alignLinks === 'left',
    center: centerLogo
  });
  var navCSS = (0, _classnames.default)({
    'nav-extended': extendWith
  }, className);
  var navMobileCSS = (0, _classnames.default)('hide-on-med-and-down', [alignLinks]);

  var links = _react.Children.map(children, function (link, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, link);
  });

  var sidenavLinks = sidenav ? sidenav : _react.Children.map(children, function (link, index) {
    var clonedLink = link && link.props && link.props.id ? (0, _react.cloneElement)(link, _objectSpread({}, link.props, {
      id: "sidenav-".concat(link.props.id)
    })) : link;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, clonedLink);
  });

  var navbar = /*#__PURE__*/_react.default.createElement("nav", _extends({
    className: navCSS
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      container: centerChildren
    }, 'nav-wrapper')
  }, search ? /*#__PURE__*/_react.default.createElement(_SearchForm.default, null) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, brand && (0, _react.cloneElement)(brand, {
    className: (0, _classnames.default)(brand.props.className, brandClasses)
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    "data-target": id,
    className: "sidenav-trigger"
  }, menuIcon), /*#__PURE__*/_react.default.createElement("ul", {
    className: navMobileCSS
  }, links))), extendWith && /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-content"
  }, extendWith));

  if (fixed) {
    navbar = /*#__PURE__*/_react.default.createElement("div", {
      className: "navbar-fixed"
    }, navbar);
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, navbar, /*#__PURE__*/_react.default.createElement("ul", {
    id: id,
    className: (0, _classnames.default)('sidenav', [alignLinks]),
    ref: _sidenav
  }, sidenavLinks));
};

Navbar.propTypes = {
  /**
   * override id
   * @default 'mobile-nav'
   */
  id: _propTypes.default.string,
  brand: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  extendWith: _propTypes.default.node,
  search: _propTypes.default.bool,

  /**
   * Allows for custom sidenav node, used for mobile view
   */
  sidenav: _propTypes.default.node,

  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: _propTypes.default.bool,

  /**
   * The Navbar children will be constrained in a container rather than spread out to the far edges
   */
  centerChildren: _propTypes.default.bool,

  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes.default.bool,

  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: _propTypes.default.shape({
    // Side of screen on which Sidenav appears.
    edge: _propTypes.default.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: _propTypes.default.bool,
    // Length in ms of enter transition.
    inDuration: _propTypes.default.number,
    // Length in ms of exit transition.
    outDuration: _propTypes.default.number,
    // Function called when sidenav starts entering.
    onOpenStart: _propTypes.default.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: _propTypes.default.func,
    // Function called when sidenav starts exiting.
    onCloseStart: _propTypes.default.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: _propTypes.default.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: _propTypes.default.bool
  }),
  menuIcon: _propTypes.default.node.isRequired
};
Navbar.defaultProps = {
  id: 'mobile-nav',
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  },
  menuIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "menu")
};
var _default = Navbar;
exports.default = _default;