'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ['className', 'eventKey', 'expanded', 'header', 'children', 'icon', 'iconClassName', 'node', 'onSelect']);

  return _react2.default.createElement(
    'li',
    _extends({ className: (0, _classnames2.default)(className, { active: expanded }) }, props),
    _react2.default.createElement(
      Node,
      {
        className: (0, _classnames2.default)('collapsible-header', { active: expanded }),
        onClick: function onClick() {
          return onSelect(eventKey);
        }
      },
      icon && _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        icon
      ),
      header
    ),
    _react2.default.createElement(
      'div',
      { className: 'collapsible-body' },
      children
    )
  );
};

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
  node: _propTypes2.default.node,
  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: _propTypes2.default.oneOf(['auto', 'instant', 'smooth'])
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};

exports.default = CollapsibleItem;