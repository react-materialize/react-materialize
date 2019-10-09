"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
    _this.renderFab = _this.renderFab.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M === 'undefined') return;
      var _this$props = this.props,
          tooltip = _this$props.tooltip,
          _this$props$tooltipOp = _this$props.tooltipOptions,
          tooltipOptions = _this$props$tooltipOp === void 0 ? {} : _this$props$tooltipOp,
          fab = _this$props.fab;

      if (tooltip) {
        this.instance = M.Tooltip.init(this._btnEl, tooltipOptions);
      }

      if (fab) {
        this.instance = M.FloatingActionButton.init(this._floatingActionBtn, fab);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          node = _this$props2.node,
          fab = _this$props2.fab,
          modal = _this$props2.modal,
          flat = _this$props2.flat,
          floating = _this$props2.floating,
          large = _this$props2.large,
          small = _this$props2.small,
          disabled = _this$props2.disabled,
          waves = _this$props2.waves,
          tooltip = _this$props2.tooltip,
          icon = _this$props2.icon,
          other = _objectWithoutProperties(_this$props2, ["children", "className", "node", "fab", "modal", "flat", "floating", "large", "small", "disabled", "waves", "tooltip", "icon"]);

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
        return this.renderFab((0, _classnames.default)(classes, className));
      } else {
        return _react.default.createElement(C, _extends({}, other, {
          disabled: !!disabled,
          onClick: this.props.onClick,
          className: (0, _classnames.default)(classes, className),
          ref: function ref(el) {
            return _this2._btnEl = el;
          },
          "data-tooltip": tooltip
        }), icon, children);
      }
    }
  }, {
    key: "renderFab",
    value: function renderFab(classes) {
      var _this3 = this;

      var _this$props3 = this.props,
          fab = _this$props3.fab,
          floating = _this$props3.floating,
          large = _this$props3.large,
          className = _this$props3.className,
          _this$props3$icon = _this$props3.icon,
          icon = _this$props3$icon === void 0 ? _react.default.createElement(_Icon.default, null, "edit") : _this$props3$icon,
          other = _objectWithoutProperties(_this$props3, ["fab", "floating", "large", "className", "icon"]);

      return _react.default.createElement("div", _extends({}, other, {
        ref: function ref(el) {
          return _this3._floatingActionBtn = el;
        },
        className: (0, _classnames.default)('fixed-action-btn', {
          toolbar: fab && fab.toolbarEnabled
        })
      }), _react.default.createElement("a", {
        className: classes
      }, icon), _react.default.createElement("ul", null, _react.default.Children.map(this.props.children, function (child) {
        return _react.default.createElement("li", {
          key: (0, _idgen.default)()
        }, child);
      })));
    }
  }]);

  return Button;
}(_react.Component);

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