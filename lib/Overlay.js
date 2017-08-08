'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      try {
        this._unrenderOverlay();
      } catch (e) {
        this._overlayInstance = null;
      }
      if (this._overlayTarget) {
        this.getContainerDOMNode().removeChild(this._overlayTarget);
        this._overlayTarget = null;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderOverlay();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderOverlay();
    }
  }, {
    key: '_mountOverlayTarget',
    value: function _mountOverlayTarget() {
      this._overlayTarget = document.createElement('div');
      this.getContainerDOMNode().appendChild(this._overlayTarget);
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      if (!this._overlayTarget) {
        this._mountOverlayTarget();
      }

      // Save reference to help testing
      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderOverlay(), this._overlayTarget);
    }
  }, {
    key: '_unrenderOverlay',
    value: function _unrenderOverlay() {
      _react2.default.unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    }
  }, {
    key: 'getOverlayDOMNode',
    value: function getOverlayDOMNode() {
      if (!this.isMounted()) {
        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
      }

      return this._overlayInstance.getDOMNode();
    }
  }, {
    key: 'getContainerDOMNode',
    value: function getContainerDOMNode() {
      return this.props.container.getDOMNode ? this.props.container.getDOMNode() : this.props.container;
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  container: _propTypes2.default.any.isRequired
};

Overlay.defaultProps = {
  container: {
    // Provide `getDOMNode` fn mocking a React component API. The `document.body`
    // reference needs to be contained within this function so that it is not accessed
    // in environments where it would not be defined, e.g. nodejs. Equally this is needed
    // before the body is defined where `document.body === null`, this ensures
    // `document.body` is only accessed after componentDidMount.
    getDOMNode: function getDOMNode() {
      return document.body;
    }
  }
};

exports.default = Overlay;