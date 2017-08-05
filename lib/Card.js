'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.renderTitle = _this.renderTitle.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          header = _props.header,
          className = _props.className,
          textClassName = _props.textClassName,
          actions = _props.actions,
          reveal = _props.reveal,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['title', 'header', 'className', 'textClassName', 'actions', 'reveal', 'children']);

      var classes = { card: true };
      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(className, classes) }),
        header,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('card-content', textClassName) },
          title ? this.renderTitle(title, reveal) : null,
          _react2.default.createElement(
            'div',
            null,
            children
          )
        ),
        this.renderReveal(title, reveal),
        actions ? this.renderAction(actions) : null
      );
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(title, reveal) {
      var revealIcon = null;
      if (reveal) {
        revealIcon = _react2.default.createElement(
          _Icon2.default,
          { right: true },
          'more_vert'
        );
      }
      var classes = {
        'card-title': true,
        'grey-text': true,
        'text-darken-4': true,
        'activator': reveal
      };
      return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes) },
        title,
        revealIcon
      );
    }
  }, {
    key: 'renderReveal',
    value: function renderReveal(title, reveal) {
      return _react2.default.createElement(
        'div',
        { className: 'card-reveal' },
        _react2.default.createElement(
          'span',
          { className: 'card-title grey-text text-darken-4' },
          title,
          _react2.default.createElement(
            _Icon2.default,
            { right: true },
            'close'
          )
        ),
        reveal
      );
    }
  }, {
    key: 'renderAction',
    value: function renderAction(actions) {
      return _react2.default.createElement(
        'div',
        { className: 'card-action' },
        actions
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string,
  textClassName: _propTypes2.default.string,
  reveal: _propTypes2.default.element,
  header: _propTypes2.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

exports.default = Card;