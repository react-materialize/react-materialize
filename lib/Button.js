"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = _interopRequireDefault(require("./constants"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      node = _ref.node,
      fab = _ref.fab,
      modal = _ref.modal,
      flat = _ref.flat,
      floating = _ref.floating,
      large = _ref.large,
      small = _ref.small,
      disabled = _ref.disabled,
      waves = _ref.waves,
      tooltip = _ref.tooltip,
      _ref$tooltipOptions = _ref.tooltipOptions,
      tooltipOptions = _ref$tooltipOptions === void 0 ? {} : _ref$tooltipOptions,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "className", "node", "fab", "modal", "flat", "floating", "large", "small", "disabled", "waves", "tooltip", "tooltipOptions", "icon"]);

  var _btn = (0, _react.useRef)(null);

  var _fab = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    if (tooltip) {
      var instance = M.Tooltip.init(_btn.current, tooltipOptions);
      return function () {
        instance && instance.destroy();
      };
    }
  }, [tooltip, tooltipOptions]);
  (0, _react.useEffect)(function () {
    if (fab) {
      var instance = M.FloatingActionButton.init(_fab.current, fab);
      return function () {
        instance && instance.destroy();
      };
    }
  }, [fab]);

  var renderFab = function renderFab(classes) {
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
      ref: _fab.current,
      className: (0, _classnames.default)('fixed-action-btn', {
        toolbar: fab.toolbarEnabled
      })
    }), /*#__PURE__*/_react.default.createElement("a", {
      className: classes
    }, icon || /*#__PURE__*/_react.default.createElement(_Icon.default, null, "edit")), /*#__PURE__*/_react.default.createElement("ul", null, _react.Children.map(children, function (child) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: (0, _idgen.default)()
      }, child);
    })));
  };

  var C = node;
  var classes = {
    btn: true,
    disabled: disabled,
    'waves-effect': waves
  };

  if (_constants.default.WAVES.indexOf(waves) > -1) {
    classes['waves-' + waves] = true;
  }

  var styles = {
    flat: flat,
    floating: floating,
    large: large,
    small: small
  };

  _constants.default.STYLES.forEach(function (style) {
    if (styles[style]) {
      classes.btn = false;
      classes['btn-' + style] = true;
    }
  });

  if (modal) {
    classes['modal-' + modal] = true;
  }

  if (fab) {
    return renderFab((0, _classnames.default)(classes, className));
  } else {
    return /*#__PURE__*/_react.default.createElement(C, _extends({}, props, {
      disabled: disabled,
      className: (0, _classnames.default)(classes, className),
      ref: _btn,
      "data-tooltip": tooltip
    }), icon, children);
  }
};

Button.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /**
   * Enable other styles
   */
  flat: _propTypes.default.bool,
  large: _propTypes.default.bool,
  small: _propTypes.default.bool,
  floating: _propTypes.default.bool,

  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   *  FAB Options are here: https://materializecss.com/floating-action-button.html#options
   * @default false
   * @default options {
   *  direction: 'top',
   *  hoverEnabled: true,
   *  toolbarEnabled: false,
   * }
   */
  fab: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    direction: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    hoverEnabled: _propTypes.default.bool,
    toolbarEnabled: _propTypes.default.bool
  })]),

  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: _propTypes.default.node,
  modal: _propTypes.default.oneOf(['close', 'confirm']),
  node: _propTypes.default.node,

  /**
   * Will be disabled when fab is set.
   */
  onClick: _propTypes.default.func,

  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes.default.string,

  /**
   * Tooltips options as here
   * http://archives.materializecss.com/0.100.2/dialogs.html#tooltip
   */
  tooltipOptions: _propTypes.default.shape({
    delay: _propTypes.default.number,
    position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    tooltip: _propTypes.default.string,
    html: _propTypes.default.bool
  }),
  waves: _propTypes.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'])
};
Button.defaultProps = {
  node: 'button'
};
var _default = Button;
exports.default = _default;