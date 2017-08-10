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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsibleItem = function (_Component) {
  _inherits(CollapsibleItem, _Component);

  function CollapsibleItem(props) {
    _classCallCheck(this, CollapsibleItem);

    var _this = _possibleConstructorReturn(this, (CollapsibleItem.__proto__ || Object.getPrototypeOf(CollapsibleItem)).call(this, props));

    _this.state = {
      expanded: props.expanded,
      headerStyle: props.headerStyle
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderBody = _this.renderBody.bind(_this);
    _this.renderIcon = _this.renderIcon.bind(_this);
    return _this;
  }

  _createClass(CollapsibleItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.expanded !== nextProps.expanded) {
        var _props = this.props,
            onSelect = _props.onSelect,
            eventKey = _props.eventKey,
            id = _props.id;

        if (!this.state.expanded) {
          this.setState({ expanded: !this.state.expanded });
          setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
        } else {
          setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
          setTimeout(() => {this.setState({ expanded: !this.state.expanded })}, 500);
        }

        if (onSelect) {
          onSelect(eventKey);
        }
      }

      if (this.state.headerStyle !== nextProps.headerStyle) {
        this.setState({ headerStyle: nextProps.headerStyle });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          node = _props2.node,
          header = _props2.header,
          icon = _props2.icon,
          iconClassName = _props2.iconClassName,
          className = _props2.className,
          props = _objectWithoutProperties(_props2, ['node', 'header', 'icon', 'iconClassName', 'className']);

      var expanded = this.state.expanded;
      var headerStyle = this.state.headerStyle;


      delete props.expanded;
      delete props.headerStyle;
      delete props.eventKey;

      var C = node;
      var liClasses = {
        active: expanded
      };
      var headerClasses = {
        'collapsible-header': true,
        active: expanded
      };

      return _react2.default.createElement(
        'li',
        _extends({ className: (0, _classnames2.default)(liClasses, className) }, props),
        _react2.default.createElement(
          C,
          { className: (0, _classnames2.default)(headerClasses), onClick: this.handleClick, style: headerStyle },
          icon && this.renderIcon(icon, iconClassName),
          header
        ),
        expanded && this.renderBody()
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props3 = this.props,
          onSelect = _props3.onSelect,
          eventKey = _props3.eventKey,
          id = _props3.id;


      if (!this.state.expanded) {
        this.setState({ expanded: !this.state.expanded });
        setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
      } else {
        setTimeout(() => {window.$("#" + id + " .collapsible-body").animate({height: "toggle"});}, 0);
        setTimeout(() => {this.setState({ expanded: !this.state.expanded })}, 500);
      }
      if (onSelect) {
        onSelect(eventKey);
      }
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        { className: 'collapsible-body', style: { display: 'none' } },
        this.props.children
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon, iconClassName) {
      return _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        icon
      );
    }
  }]);

  return CollapsibleItem;
}(_react.Component);

CollapsibleItem.propTypes = {
  header: _propTypes2.default.any.isRequired,
  icon: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onSelect: _propTypes2.default.func,
  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes2.default.bool,
  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes2.default.any,
  className: _propTypes2.default.string,
  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes2.default.node
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'a',
  headerStyle: {}
};

exports.default = CollapsibleItem;
