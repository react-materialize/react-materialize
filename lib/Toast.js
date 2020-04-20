"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(props) {
  var children = props.children,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options;

  var showToast = function showToast() {
    return typeof M !== 'undefined' ? M.toast(options) : null;
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: showToast,
    className: (0, _classnames.default)('toast', className)
  }, children);
};

Toast.propTypes = {
  className: _propTypes.default.string,

  /**
   * Toast trigger content
   */
  children: _propTypes.default.node,

  /**
   * Options to pass to Toast method
   * <a href="https://materializecss.com/toasts.html">More</a>
   */
  options: _propTypes.default.shape({
    /**
     * The HTML content of the Toast.
     * @default ''
     */
    html: _propTypes.default.string,

    /**
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: _propTypes.default.number,

    /**
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: _propTypes.default.number,

    /**
     * Classes to be added to the toast element.
     * @default ''
     */
    classes: _propTypes.default.string,

    /**
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: _propTypes.default.func,

    /**
     * The percentage of the toast's width it takes for a drag to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: _propTypes.default.number
  })
};
var _default = Toast;
exports.default = _default;