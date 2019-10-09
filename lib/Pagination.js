"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _PaginationButton = _interopRequireDefault(require("./PaginationButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    var activePage = props.activePage,
        items = props.items;
    _this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };
    _this.renderButtons = _this.renderButtons.bind(_assertThisInitialized(_this));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activePage !== this.props.activePage) {
        this.setState({
          activePage: nextProps.activePage
        });
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(i) {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          onSelect = _this$props.onSelect;
      return function () {
        if (i > 0 && i <= items) {
          if (onSelect) {
            onSelect(i);
          }

          _this2.setState({
            activePage: i
          });
        }
      };
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this$props2 = this.props,
          items = _this$props2.items,
          children = _this$props2.children,
          _this$props2$maxButto = _this$props2.maxButtons,
          maxButtons = _this$props2$maxButto === void 0 ? items : _this$props2$maxButto,
          leftBtn = _this$props2.leftBtn,
          rightBtn = _this$props2.rightBtn;
      var activePage = this.state.activePage;
      if (children) return children;
      var buttonsCount = Math.min(maxButtons, items);
      var maxPos = items - buttonsCount;
      var halfButtons = parseInt(buttonsCount / 2, 10);
      var hiddenPagesBefore = activePage - halfButtons;

      if (hiddenPagesBefore > maxPos) {
        hiddenPagesBefore = maxPos + 1;
      }

      var from = Math.max(hiddenPagesBefore, 1);
      var to = Math.min(items, from + maxButtons - 1);
      var buttons = [_react.default.createElement(_PaginationButton.default, {
        disabled: activePage === 1,
        key: 'pagination-0',
        onSelect: this._onClick(activePage - 1)
      }, leftBtn)];

      for (var i = from; i <= to; i++) {
        buttons.push(_react.default.createElement(_PaginationButton.default, {
          active: i === activePage,
          key: "pagination-".concat(i),
          onSelect: this._onClick(i)
        }, i));
      }

      buttons.push(_react.default.createElement(_PaginationButton.default, {
        key: "pagination-".concat(items + 1),
        disabled: activePage === items,
        onSelect: this._onClick(activePage + 1)
      }, rightBtn));
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", {
        className: (0, _classnames.default)('pagination', this.props.className)
      }, this.renderButtons());
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes.default.number.isRequired,

  /**
   * The initial activePage
   */
  activePage: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  maxButtons: _propTypes.default.number,
  onSelect: _propTypes.default.func,
  leftBtn: _propTypes.default.node,
  rightBtn: _propTypes.default.node
};
Pagination.defaultProps = {
  activePage: 1,
  items: 10,
  leftBtn: _react.default.createElement(_Icon.default, null, "chevron_left"),
  rightBtn: _react.default.createElement(_Icon.default, null, "chevron_right")
};
var _default = Pagination;
exports.default = _default;