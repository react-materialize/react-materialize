"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = _interopRequireDefault(require("./constants"));

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

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));
    _this.state = {
      value: props.value || '',
      itemSelected: false
    };
    _this.renderIcon = _this.renderIcon.bind(_assertThisInitialized(_this));
    _this._onChange = _this._onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var options = this.props.options;
        this.instance = M.Autocomplete.init(this._autocomplete, options);
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
    key: "renderIcon",
    value: function renderIcon(icon) {
      return _react.default.cloneElement(icon, {
        className: 'prefix'
      });
    }
  }, {
    key: "_onChange",
    value: function _onChange(e) {
      var onChange = this.props.onChange;
      var value = e.target.value;
      onChange && onChange(e, value);
      this.setState({
        value: value,
        itemSelected: false
      });
    }
  }, {
    key: "_onAutocomplete",
    value: function _onAutocomplete(value, e) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          options = _this$props.options;
      var onAutocomplete = options.onAutocomplete;
      onAutocomplete && onAutocomplete(value);
      onChange && onChange(e, value);
      this.setState({
        value: value,
        itemSelected: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          title = _this$props2.title,
          icon = _this$props2.icon,
          s = _this$props2.s,
          m = _this$props2.m,
          l = _this$props2.l,
          xl = _this$props2.xl,
          offset = _this$props2.offset,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          options = _this$props2.options,
          props = _objectWithoutProperties(_this$props2, ["id", "className", "title", "icon", "s", "m", "l", "xl", "offset", "placeholder", "value", "onChange", "options"]);

      var _id = id || "autocomplete-".concat((0, _idgen.default)());

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var classes = {
        col: true
      };

      _constants.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react.default.createElement("div", _extends({
        offset: offset,
        className: (0, _classnames.default)('input-field', className, classes)
      }, props), icon && this.renderIcon(icon), _react.default.createElement("input", {
        placeholder: placeholder,
        className: "autocomplete",
        id: _id,
        onChange: this._onChange,
        type: "text",
        value: this.state.value,
        ref: function ref(input) {
          _this2._autocomplete = input;
        }
      }), _react.default.createElement("label", {
        htmlFor: _id
      }, title));
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /*
   * The title of the autocomplete component.
   */
  title: _propTypes.default.string,

  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes.default.node,
  s: _propTypes.default.number,
  m: _propTypes.default.number,
  l: _propTypes.default.number,
  xl: _propTypes.default.number,
  offset: _propTypes.default.string,

  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes.default.string,

  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes.default.func,

  /**
   * The value of the input
   */
  value: _propTypes.default.string,

  /**
   * Options for the autocomplete
   * <a target="_blank" rel="external" href="https://materializecss.com/autocomplete.html#options</a>
   */
  options: _propTypes.default.shape({
    /**
     * Data object defining autocomplete options with optional icon strings.
     */
    data: _propTypes.default.object.isRequired,

    /**
     * Limit of results the autocomplete shows.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for when autocompleted.
     */
    onAutocomplete: _propTypes.default.func,

    /**
     * 	Minimum number of characters before autocomplete starts.
     */
    minLength: _propTypes.default.number,

    /**
     * Sort function that defines the order of the list of autocomplete options.
     */
    sortFunction: _propTypes.default.func
  })
};
Autocomplete.defaultProps = {
  options: {
    data: {},
    limit: Infinity,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: null
  }
};
var _default = Autocomplete;
exports.default = _default;