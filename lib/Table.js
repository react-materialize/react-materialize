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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bordered = _props.bordered,
          centered = _props.centered,
          children = _props.children,
          className = _props.className,
          hoverable = _props.hoverable,
          responsive = _props.responsive,
          striped = _props.striped,
          props = _objectWithoutProperties(_props, ['bordered', 'centered', 'children', 'className', 'hoverable', 'responsive', 'striped']);

      var classes = {
        centered: centered,
        highlight: hoverable,
        'responsive-table': responsive,
        striped: striped,
        bordered: bordered
      };

      return _react2.default.createElement(
        'table',
        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
        children
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
  * Center align all the text in the table
  * @default false
  */
  centered: _propTypes2.default.bool,
  /**
  * Highlight the row that's hovered
  * @default false
  */
  hoverable: _propTypes2.default.bool,
  /**
  * Enable response to make the table horizontally scrollable on smaller screens
  * @default false
  */
  responsive: _propTypes2.default.bool,
  /**
  * striped style
  * @default false
  */
  striped: _propTypes2.default.bool,
  /**
  * Add border to each row
  * @default false
  */
  bordered: _propTypes2.default.bool
};

exports.default = Table;