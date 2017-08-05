'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parallax = function (_Component) {
  _inherits(Parallax, _Component);

  function Parallax() {
    _classCallCheck(this, Parallax);

    return _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).apply(this, arguments));
  }

  _createClass(Parallax, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.parallax').parallax();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          imageSrc = _props.imageSrc;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('parallax-container', className) },
        _react2.default.createElement(
          'div',
          { className: 'parallax' },
          _react2.default.createElement('img', { src: imageSrc })
        )
      );
    }
  }]);

  return Parallax;
}(_react.Component);

Parallax.propTypes = {
  className: _propTypes2.default.string,
  /**
  * The image path which will be used for the background of the parallax
  */
  imageSrc: _propTypes2.default.string
};
exports.default = Parallax;