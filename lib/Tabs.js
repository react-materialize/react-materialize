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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$tabOptions = this.props.tabOptions,
          tabOptions = _props$tabOptions === undefined ? {} : _props$tabOptions;


      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(idx, e) {
      var onChange = this.props.onChange;


      if (onChange) onChange(idx, e);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$tabOptions = nextProps.tabOptions,
          tabOptions = _nextProps$tabOptions === undefined ? {} : _nextProps$tabOptions;


      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props$tabOptions2 = this.props.tabOptions,
          tabOptions = _props$tabOptions2 === undefined ? {} : _props$tabOptions2;


      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          defaultValue = _props.defaultValue;


      var scope = '' + (0, _idgen2.default)();

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { s: 12 },
          _react2.default.createElement(
            'ul',
            { className: (0, _classnames2.default)('tabs', className), ref: function ref(el) {
                return _this2._tabsEl = el;
              } },
            _react2.default.Children.map(children, function (child, id) {
              var _classes;

              var idx = '' + scope + id;
              var _child$props = child.props,
                  active = _child$props.active,
                  className = _child$props.className,
                  disabled = _child$props.disabled,
                  tabWidth = _child$props.tabWidth,
                  title = _child$props.title;


              var classes = (_classes = {}, _defineProperty(_classes, 's' + tabWidth, tabWidth), _defineProperty(_classes, 'tab', true), _defineProperty(_classes, 'disabled', disabled), _defineProperty(_classes, 'col', true), _classes);

              return _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)(classes, className), key: idx },
                _react2.default.createElement(
                  'a',
                  _extends({
                    href: '#tab_' + idx,
                    className: active || defaultValue === idx ? 'active' : ''
                  }, disabled ? {} : { onClick: _this2._onSelect.bind(_this2, idx) }),
                  title
                )
              );
            })
          )
        ),
        _react2.default.Children.map(children, function (child, id) {
          var idx = '' + scope + id;
          return _react2.default.createElement(
            _Col2.default,
            {
              id: 'tab_' + idx,
              s: 12,
              key: 'tab' + idx,
              style: {
                display: child.props.active || defaultValue === idx ? 'block' : 'none'
              }
            },
            child.props.children
          );
        })
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  tabOptions: _propTypes2.default.shape({
    onShow: _propTypes2.default.func,
    swipeable: _propTypes2.default.bool,
    responsiveThreshold: _propTypes2.default.number
  })
};

exports.default = Tabs;