"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.scope = "".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(Tabs, [{
    key: "_onSelect",
    value: function _onSelect(idx, e) {
      var onChange = this.props.onChange;
      if (onChange) onChange(idx, e);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.Tabs.init(this._tabsEl, options);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance.destroy();
        this.instance = M.Tabs.init(this._tabsEl, options);
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

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("ul", {
        className: (0, _classnames.default)('tabs', className),
        ref: function ref(el) {
          return _this2._tabsEl = el;
        }
      }, _react.default.Children.map(children, function (child, id) {
        var _classes;

        var idx = "".concat(_this2.scope).concat(id);
        var _child$props = child.props,
            active = _child$props.active,
            disabled = _child$props.disabled,
            tabWidth = _child$props.tabWidth,
            title = _child$props.title;
        var classes = (_classes = {}, _defineProperty(_classes, "s".concat(tabWidth), tabWidth), _defineProperty(_classes, "tab", true), _defineProperty(_classes, "disabled", disabled), _defineProperty(_classes, "col", true), _classes);
        return _react.default.createElement("li", {
          className: (0, _classnames.default)(classes),
          key: idx
        }, _react.default.createElement("a", _extends({
          href: "#tab_".concat(idx),
          className: active || defaultValue === idx ? 'active' : ''
        }, disabled ? {} : {
          onClick: _this2._onSelect.bind(_this2, idx)
        }), title));
      })), _react.default.createElement(_Row.default, null, _react.default.Children.map(children, function (child, id) {
        var idx = "".concat(_this2.scope).concat(id);
        return (0, _react.cloneElement)(child, {
          defaultValue: defaultValue,
          idx: idx
        });
      })));
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,

  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  options: _propTypes.default.shape({
    /*
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: _propTypes.default.number,

    /*
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: _propTypes.default.func,

    /*
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: _propTypes.default.bool,

    /*
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