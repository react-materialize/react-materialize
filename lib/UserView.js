'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserView = exports.UserShape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserShape = exports.UserShape = {
  background: _propTypes2.default.string,
  image: _propTypes2.default.string,
  name: _propTypes2.default.string,
  email: _propTypes2.default.string
};

var UserView = exports.UserView = function (_Component) {
  _inherits(UserView, _Component);

  function UserView() {
    _classCallCheck(this, UserView);

    return _possibleConstructorReturn(this, (UserView.__proto__ || Object.getPrototypeOf(UserView)).apply(this, arguments));
  }

  _createClass(UserView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          background = _props.background,
          image = _props.image,
          name = _props.name,
          email = _props.email;

      return _react2.default.createElement(
        'div',
        { className: 'userView' },
        background && _react2.default.createElement(
          'div',
          { className: 'background' },
          _react2.default.createElement('img', { src: background })
        ),
        image && _react2.default.createElement(
          'a',
          { href: '#!user' },
          _react2.default.createElement('img', { className: 'circle', src: image })
        ),
        name && _react2.default.createElement(
          'a',
          { href: '#!name' },
          _react2.default.createElement(
            'span',
            { className: 'white-text name' },
            name
          )
        ),
        email && _react2.default.createElement(
          'a',
          { href: '#!email' },
          _react2.default.createElement(
            'span',
            { className: 'white-text email' },
            email
          )
        )
      );
    }
  }]);

  return UserView;
}(_react.Component);

;

UserView.propTypes = UserShape;

exports.default = UserView;