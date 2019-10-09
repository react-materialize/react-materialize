"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      className = _ref.className;
  var style;
  var classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };

  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('progress lighten-5', className)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(classes, className),
    style: style
  }));
};

ProgressBar.propTypes = {
  className: _propTypes.default.string,

  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: _propTypes.default.number
};
var _default = ProgressBar;
exports.default = _default;