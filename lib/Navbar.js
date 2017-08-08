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

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.renderSideNav = _this.renderSideNav.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof $ !== 'undefined') {
        $('.button-collapse').sideNav(this.props.options);
      }
    }
  }, {
    key: 'renderSideNav',
    value: function renderSideNav() {
      return _react2.default.createElement(
        'ul',
        { id: 'nav-mobile', className: 'side-nav' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          brand = _props.brand,
          className = _props.className,
          fixed = _props.fixed,
          left = _props.left,
          right = _props.right,
          href = _props.href,
          other = _objectWithoutProperties(_props, ['brand', 'className', 'fixed', 'left', 'right', 'href']);

      delete other.options;

      var classes = {
        right: right,
        'hide-on-med-and-down': true
      };

      var brandClasses = {
        'brand-logo': true,
        right: left
      };

      var content = _react2.default.createElement(
        'nav',
        _extends({}, other, { className: className }),
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2.default.createElement(
            _Col2.default,
            { s: 12 },
            _react2.default.createElement(
              'a',
              { href: href, className: (0, _classnames2.default)(brandClasses) },
              brand
            ),
            _react2.default.createElement(
              'ul',
              { className: (0, _classnames2.default)(className, classes) },
              this.props.children
            ),
            this.renderSideNav(),
            _react2.default.createElement(
              'a',
              { className: 'button-collapse', href: '#', 'data-activates': 'nav-mobile' },
              _react2.default.createElement(
                _Icon2.default,
                null,
                'view_headline'
              )
            )
          )
        )
      );

      if (fixed) {
        content = _react2.default.createElement(
          'div',
          { className: 'navbar-fixed' },
          content
        );
      }

      return content;
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  brand: _propTypes2.default.node,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  left: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes2.default.bool,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes2.default.shape({
    menuWidth: _propTypes2.default.number,
    edge: _propTypes2.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool
  })
};

Navbar.defaultProps = {
  href: '/',
  options: {}
};

exports.default = Navbar;