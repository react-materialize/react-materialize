"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Chip =
/*#__PURE__*/
function (_Component) {
  _inherits(Chip, _Component);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chip).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (options && typeof M !== 'undefined') {
        this.instance = M.Chips.init(this._chips, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.instance && this.instance.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          close = _this$props.close,
          closeIcon = _this$props.closeIcon,
          className = _this$props.className,
          options = _this$props.options,
          other = _objectWithoutProperties(_this$props, ["children", "close", "closeIcon", "className", "options"]);

      var classes = (0, _classnames.default)({
        chip: !options,
        chips: options
      }, className);

      var chipContent = _react.default.createElement(_react.Fragment, null, children, close && {
        closeIcon: closeIcon
      });

      if (options) {
        chipContent = null;
      }

      return _react.default.createElement("div", _extends({
        className: classes
      }, other, {
        ref: function ref(div) {
          _this._chips = div;
        }
      }), chipContent);
    }
  }]);

  return Chip;
}(_react.Component);

Chip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Shows a close icon
   */
  close: _propTypes.default.bool,
  closeIcon: _propTypes.default.node,

  /**
   * Options object for the Chip Javascript Plugin
   */
  options: _propTypes.default.shape({
    /**
     * Set the chip data
     */
    data: _propTypes.default.arrayOf(_propTypes.default.objectOf(_propTypes.default.string)),

    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: _propTypes.default.string,

    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: _propTypes.default.string,

    /**
     * Set autocomplete options.
     */
    autocompleteOptions: _propTypes.default.shape({
      /**
       * Data object defining autocomplete options with optional icon strings.
       */
      data: _propTypes.default.objectOf(_propTypes.default.string),

      /**
       * Limit of results the autocomplete shows.
       */
      limit: _propTypes.default.number,

      /**
       * Minimum number of characters before autocomplete starts.
       */
      minLength: _propTypes.default.number
    }),

    /**
     * Set chips limit.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for chip add.
     */
    onChipAdd: _propTypes.default.func,

    /**
     * Callback for chip select.
     */
    onChipSelect: _propTypes.default.func,

    /**
     * Callback for chip delete.
     */
    onChipDelete: _propTypes.default.func
  })
};
Chip.defaultProps = {
  close: false,
  closeIcon: _react.default.createElement(_Icon.default, null, "close"),
  options: null
};
var _default = Chip;
exports.default = _default;