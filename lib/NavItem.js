'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '' : _ref$href,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['divider', 'children', 'href', 'onClick']);

  if (divider) return _react2.default.createElement('li', { className: 'divider' });
  var a = onClick ? _react2.default.createElement(
    'a',
    { onClick: onClick },
    children
  ) : _react2.default.createElement(
    'a',
    { href: href },
    children
  );
  return _react2.default.createElement(
    'li',
    props,
    a
  );
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  divider: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes2.default.func
};

exports.default = NavItem;