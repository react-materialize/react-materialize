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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, props));
    _this.renderTitle = _this.renderTitle.bind(_assertThisInitialized(_this));
    _this.renderReveal = _this.renderReveal.bind(_assertThisInitialized(_this));
    _this.renderAction = _this.renderAction.bind(_assertThisInitialized(_this));
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_this));
    _this.renderAll = _this.renderAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Card, [{
    key: "renderTitle",
    value: function renderTitle(title, reveal) {
      var revealIcon = this.props.revealIcon;
      return _react.default.createElement("span", {
        className: (0, _classnames.default)('card-title', {
          activator: reveal
        })
      }, title, reveal && {
        revealIcon: revealIcon
      });
    }
  }, {
    key: "renderReveal",
    value: function renderReveal(title, reveal) {
      var closeIcon = this.props.closeIcon;
      return _react.default.createElement("div", {
        className: "card-reveal"
      }, _react.default.createElement("span", {
        className: "card-title"
      }, title, (0, _react.cloneElement)(closeIcon, {
        right: true
      })), reveal);
    }
  }, {
    key: "renderAction",
    value: function renderAction(actions) {
      return _react.default.createElement("div", {
        className: "card-action"
      }, actions);
    }
  }, {
    key: "renderContent",
    value: function renderContent(title, reveal, textClassName, children) {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('card-content', textClassName)
      }, title && this.renderTitle(title, reveal), _react.default.createElement("div", null, children));
    }
  }, {
    key: "renderAll",
    value: function renderAll(title, reveal, textClassName, children, actions) {
      return _react.default.createElement(_react.Fragment, null, this.renderContent(title, reveal, textClassName, children), this.renderReveal(title, reveal), actions && this.renderAction(actions));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          header = _this$props.header,
          className = _this$props.className,
          textClassName = _this$props.textClassName,
          actions = _this$props.actions,
          reveal = _this$props.reveal,
          children = _this$props.children,
          horizontal = _this$props.horizontal,
          other = _objectWithoutProperties(_this$props, ["title", "header", "className", "textClassName", "actions", "reveal", "children", "horizontal"]);

      var classes = {
        card: true,
        horizontal: horizontal
      };
      return _react.default.createElement("div", _extends({}, other, {
        className: (0, _classnames.default)(className, classes)
      }), header, horizontal ? _react.default.createElement("div", {
        className: "card-stacked"
      }, this.renderAll(title, reveal, textClassName, children, actions)) : this.renderAll(title, reveal, textClassName, children, actions));
    }
  }]);

  return Card;
}(_react.Component);

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
  closeIcon: _propTypes.default.node,
  revealIcon: _propTypes.default.node
};
Card.defaultProps = {
  closeIcon: _react.default.createElement(_Icon.default, null, "close"),
  revealIcon: _react.default.createElement(_Icon.default, null, "more_vert")
};
var _default = Card;
exports.default = _default;