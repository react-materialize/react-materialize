"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Modal = function Modal(_ref) {
  var actions = _ref.actions,
      bottomSheet = _ref.bottomSheet,
      children = _ref.children,
      fixedFooter = _ref.fixedFooter,
      header = _ref.header,
      className = _ref.className,
      trigger = _ref.trigger,
      options = _ref.options,
      open = _ref.open,
      root = _ref.root,
      props = _objectWithoutProperties(_ref, ["actions", "bottomSheet", "children", "fixedFooter", "header", "className", "trigger", "options", "open", "root"]);

  var _modalRoot = (0, _react.useRef)(null);

  var _modalInstance = (0, _react.useRef)(null);

  var _modalRef = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var modalRoot = _modalRoot.current;
    _modalInstance.current = M.Modal.init(_modalRef.current, options);
    return function () {
      root.removeChild(modalRoot);

      _modalInstance.current.destroy();
    };
  }, [options, root]);
  (0, _react.useEffect)(function () {
    if (open) {
      showModal();
    } else {
      hideModal();
    }
  }, [open]);

  var showModal = function showModal(e) {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.open();
  };

  var hideModal = function hideModal(e) {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.close();
  };

  var classes = (0, _classnames.default)('modal', {
    'modal-fixed-footer': fixedFooter,
    'bottom-sheet': bottomSheet
  }, className);

  var renderModalPortal = function renderModalPortal() {
    if (!_modalRoot.current) {
      _modalRoot.current = document.createElement('div');
      root.appendChild(_modalRoot.current);
    }

    return (0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", _extends({
      className: classes,
      ref: _modalRef
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react.default.createElement("h4", null, header), children), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-footer"
    }, _react.Children.toArray(actions))), _modalRoot.current);
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, trigger && (0, _react.cloneElement)(trigger, {
    onClick: showModal
  }), renderModalPortal());
};

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: _propTypes.default.shape({
    /**
     * Opacity of the modal overlay.
     */
    opacity: _propTypes.default.number,

    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /**
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
   * @default false
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
  id: _propTypes.default.string,

  /**
   * Root node where modal should be injected
   * @default document.body
   */
  root: _propTypes.default.any
};
Modal.defaultProps = {
  id: "Modal-".concat((0, _idgen.default)()),
  root: document.body,
  open: false,
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
  actions: [/*#__PURE__*/_react.default.createElement(_Button.default, {
    waves: "green",
    modal: "close",
    flat: true
  }, "Close")]
};
var _default = Modal;
exports.default = _default;