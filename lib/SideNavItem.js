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

var _UserView = require('./UserView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavItem = function (_Component) {
  _inherits(SideNavItem, _Component);

  function SideNavItem() {
    _classCallCheck(this, SideNavItem);

    return _possibleConstructorReturn(this, (SideNavItem.__proto__ || Object.getPrototypeOf(SideNavItem)).apply(this, arguments));
  }

  _createClass(SideNavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          divider = _props.divider,
          subheader = _props.subheader,
          userView = _props.userView,
          icon = _props.icon,
          _props$href = _props.href,
          href = _props$href === undefined ? '#!' : _props$href,
          waves = _props.waves,
          _props$user = _props.user,
          user = _props$user === undefined ? {} : _props$user,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['divider', 'subheader', 'userView', 'icon', 'href', 'waves', 'user', 'children']);

      var itemClasses = {
        'divider': divider
      };
      var linkClasses = {
        'subheader': subheader,
        'waves-effect': waves
      };

      return _react2.default.createElement(
        'li',
        _extends({ className: (0, _classnames2.default)(itemClasses) }, props),
        userView && user && _react2.default.createElement(_UserView.UserView, user),
        !userView && _react2.default.createElement(
          'a',
          { className: (0, _classnames2.default)(linkClasses), href: href },
          icon && _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            icon
          ),
          children
        )
      );
    }
  }]);

  return SideNavItem;
}(_react.Component);

SideNavItem.propTypes = {
  children: _propTypes2.default.node,
  divider: _propTypes2.default.bool,
  subheader: _propTypes2.default.bool,
  userView: _propTypes2.default.bool,
  waves: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  user: _propTypes2.default.shape(_UserView.UserShape)
};

exports.default = SideNavItem;