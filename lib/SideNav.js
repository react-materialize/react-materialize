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

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav(props) {
    _classCallCheck(this, SideNav);

    var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

    _this.id = props.id || 'sidenav_' + (0, _idgen2.default)();
    return _this;
  }

  _createClass(SideNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options = this.props.options,
          options = _props$options === undefined ? {} : _props$options;

      $(this._trigger).sideNav(options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      delete props.id;
      delete props.trigger;
      delete props.options;
      return _react2.default.createElement(
        'span',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          'ul',
          _extends({ id: this.id, className: 'side-nav' }, props),
          children
        )
      );
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var _this2 = this;

      var trigger = this.props.trigger;

      return _react2.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = '[data-activates=' + _this2.id + ']';
        },
        'data-activates': this.id
      });
    }
  }]);

  return SideNav;
}(_react.Component);

SideNav.propTypes = {
  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: _propTypes2.default.string,
  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes2.default.node.isRequired,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes2.default.shape({
    menuWidth: _propTypes2.default.number,
    edge: _propTypes2.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool
  }),
  children: _propTypes2.default.node
};

exports.default = SideNav;