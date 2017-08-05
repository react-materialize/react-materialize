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

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderFab = _this.renderFab.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          node = _props.node,
          fab = _props.fab,
          fabClickOnly = _props.fabClickOnly,
          modal = _props.modal,
          flat = _props.flat,
          floating = _props.floating,
          large = _props.large,
          disabled = _props.disabled,
          waves = _props.waves,
          other = _objectWithoutProperties(_props, ['className', 'node', 'fab', 'fabClickOnly', 'modal', 'flat', 'floating', 'large', 'disabled', 'waves']);

      var toggle = fabClickOnly ? 'click-to-toggle' : '';
      var C = node;
      var classes = {
        btn: true,
        disabled: disabled,
        'waves-effect': waves
      };

      if (_constants2.default.WAVES.indexOf(waves) > -1) {
        classes['waves-' + waves] = true;
      }

      var styles = { flat: flat, floating: floating, large: large };
      _constants2.default.STYLES.forEach(function (style) {
        classes['btn-' + style] = styles[style];
      });

      if (modal) {
        classes['modal-action'] = true;
        classes['modal-' + modal] = true;
      }
      if (fab) {
        return this.renderFab((0, _classnames2.default)(classes, className), fab, toggle);
      } else {
        return _react2.default.createElement(
          C,
          _extends({}, other, {
            disabled: !!disabled,
            onClick: this.props.onClick,
            className: (0, _classnames2.default)(classes, className)
          }),
          this.renderIcon(),
          this.props.children
        );
      }
    }
  }, {
    key: 'renderFab',
    value: function renderFab(className, orientation, clickOnly) {
      var classes = (0, _classnames2.default)(orientation, clickOnly);
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('fixed-action-btn', classes) },
        _react2.default.createElement(
          'a',
          { className: className },
          this.renderIcon()
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.createElement(
              'li',
              { key: (0, _idgen2.default)() },
              child
            );
          })
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var icon = this.props.icon;

      if (!icon) return;

      return _react2.default.createElement(
        _Icon2.default,
        null,
        icon
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  /**
   * Enable other styles
   */
  flat: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  floating: _propTypes2.default.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   * @default vertical
   */
  fab: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  /**
   * The icon to display, if specified it will create a button with the material icon
   */
  icon: _propTypes2.default.string,
  modal: _propTypes2.default.oneOf(['close', 'confirm']),
  node: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes2.default.string,
  waves: _propTypes2.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal']),
  /**
   * FAB Click-Only
   * Turns a FAB from a hover-toggle to a click-toggle
   */
  fabClickOnly: _propTypes2.default.bool
};

Button.defaultProps = {
  node: 'button'
};

exports.default = Button;