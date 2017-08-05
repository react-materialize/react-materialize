'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Overlay2 = require('./Overlay');

var _Overlay3 = _interopRequireDefault(_Overlay2);

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayTrigger = function (_Overlay) {
  _inherits(OverlayTrigger, _Overlay);

  function OverlayTrigger(props) {
    _classCallCheck(this, OverlayTrigger);

    var _this = _possibleConstructorReturn(this, (OverlayTrigger.__proto__ || Object.getPrototypeOf(OverlayTrigger)).call(this, props));

    _this.showOverlay = _this.showOverlay.bind(_this);
    _this.renderOverlay = _this.renderOverlay.bind(_this);
    _this.overlayID = _this.props.overlay.props.id || 'overlay_' + (0, _idgen2.default)();
    return _this;
  }

  _createClass(OverlayTrigger, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      if (!children) return null;

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, {
        onClick: this.showOverlay
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      return _react2.default.cloneElement(this.props.overlay, {
        id: this.overlayID
      });
    }
  }, {
    key: 'showOverlay',
    value: function showOverlay(e) {
      e.preventDefault();
      $('#' + this.overlayID).modal(this.props.modalOptions).modal('open');
    }
  }]);

  return OverlayTrigger;
}(_Overlay3.default);

OverlayTrigger.propTypes = {
  /**
  * ModalOptions
  * Object with options for modal
  */
  modalOptions: _propTypes2.default.shape({
    /*
     * Modal can be dismissed by clicking outside of the modal
     */
    dismissible: _propTypes2.default.bool,
    /*
     * Opacity of modal background ( from 0 to 1 )
     */
    opacity: _propTypes2.default.number,
    /*
     * Transition in duration
     */
    inDuration: _propTypes2.default.number,
    /*
     * Transition out duration
     */
    outDuration: _propTypes2.default.number,
    /*
     * Starting top style attribute
     */
    startingTop: _propTypes2.default.string,
    /*
     * Ending top style attribute
     */
    endingTop: _propTypes2.default.string,
    /*
     * Callback for Modal open. Modal and trigger parameters available.
     */
    ready: _propTypes2.default.func,
    /*
     *  Callback for Modal close
     */
    complete: _propTypes2.default.func
  }),
  overlay: _propTypes2.default.node
};

exports.default = OverlayTrigger;