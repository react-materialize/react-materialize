"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _Button = _interopRequireDefault(require("./Button"));

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

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));

    _this.createRoot();

    return _this;
  }

  _createClass(Modal, [{
    key: "createRoot",
    value: function createRoot() {
      this.modalRoot = document.createElement('div');
      document.body.appendChild(this.modalRoot);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var _this$props = this.props,
            options = _this$props.options,
            open = _this$props.open;
        this.instance = M.Modal.init(this._modal, options);
        if (open) this.showModal();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalRoot);

      if (this.instance) {
        this.hideModal();
        this.instance.destroy();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if the modal is not open yet
      if (!this.props.open && nextProps.open) {
        this.showModal(); // open could be undefined
      } else if (nextProps.open === false) {
        this.hideModal();
      }
    }
  }, {
    key: "renderModalPortal",
    value: function renderModalPortal() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          actions = _this$props2.actions,
          bottomSheet = _this$props2.bottomSheet,
          children = _this$props2.children,
          fixedFooter = _this$props2.fixedFooter,
          header = _this$props2.header,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["id", "actions", "bottomSheet", "children", "fixedFooter", "header", "className"]);

      delete other.options;
      delete other.trigger;
      var classes = (0, _classnames.default)('modal', {
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      }, className);
      return this.modalRoot && _reactDom.default.createPortal(_react.default.createElement("div", _extends({
        id: id,
        className: classes,
        ref: function ref(div) {
          _this2._modal = div;
        }
      }, other), _react.default.createElement("div", {
        className: "modal-content"
      }, _react.default.createElement("h4", null, header), children), _react.default.createElement("div", {
        className: "modal-footer"
      }, _react.default.Children.toArray(actions))), this.modalRoot);
    }
  }, {
    key: "showModal",
    value: function showModal(e) {
      e && e.preventDefault();
      this.instance && this.instance.open();
    }
  }, {
    key: "hideModal",
    value: function hideModal(e) {
      e && e.preventDefault();
      this.instance && this.instance.close();
    }
  }, {
    key: "render",
    value: function render() {
      var trigger = this.props.trigger;
      return _react.default.createElement(_react.Fragment, null, trigger && _react.default.cloneElement(trigger, {
        onClick: this.showModal
      }), this.renderModalPortal());
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: _propTypes.default.shape({
    /*
     * Opacity of the modal overlay.
     */
    opacity: _propTypes.default.number,

    /*
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /*
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: _propTypes.default.bool,

    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: _propTypes.default.bool,

    /**
     * Starting top offset
     */
    startingTop: _propTypes.default.string,

    /**
     * Ending top offset
     */
    endingTop: _propTypes.default.string
  }),

  /**
   * Extra class to added to the Modal
   */
  className: _propTypes.default.string,

  /**
   * Modal is opened on mount
   */
  open: _propTypes.default.bool,

  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes.default.bool,

  /**
   * Component children
   */
  children: _propTypes.default.node,

  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes.default.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes.default.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes.default.node,

  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes.default.node,

  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes.default.string
};
Modal.defaultProps = {
  id: "modal-".concat((0, _idgen.default)()),
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react.default.createElement(_Button.default, {
    waves: "green",
    modal: "close",
    flat: true
  }, "Close")]
};
var _default = Modal;
exports.default = _default;