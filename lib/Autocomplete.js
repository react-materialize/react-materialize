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

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderDropdown = _this.renderDropdown.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'renderIcon',
    value: function renderIcon(icon, iconClassName) {
      return _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        icon
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(data, minLength) {
      var _this2 = this;

      var value = this.state.value;


      if (minLength && minLength > value.length || !value) {
        return null;
      }

      return _react2.default.createElement(
        'ul',
        { className: 'autocomplete-content dropdown-content' },
        Object.keys(data).map(function (key, idx) {
          var index = key.toUpperCase().indexOf(value.toUpperCase());
          if (index !== -1 && value.length < key.length) {
            return _react2.default.createElement(
              'li',
              { key: key + '_' + idx, onClick: function onClick(evt) {
                  return _this2.setState({ value: key });
                } },
              data[key] ? _react2.default.createElement('img', { src: data[key], className: 'right circle' }) : null,
              _react2.default.createElement(
                'span',
                null,
                index !== 0 ? key.substring(0, index) : '',
                _react2.default.createElement(
                  'span',
                  { className: 'highlight' },
                  value
                ),
                key.length !== index + value.length ? key.substring(index + value.length) : ''
              )
            );
          }
        })
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(evt) {
      this.setState({ value: evt.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          title = _props.title,
          data = _props.data,
          icon = _props.icon,
          iconClassName = _props.iconClassName,
          s = _props.s,
          m = _props.m,
          l = _props.l,
          offset = _props.offset,
          minLength = _props.minLength,
          props = _objectWithoutProperties(_props, ['className', 'title', 'data', 'icon', 'iconClassName', 's', 'm', 'l', 'offset', 'minLength']);

      var _id = 'autocomplete-input';
      var sizes = { s: s, m: m, l: l };
      var classes = {};
      _constants2.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          _extends({ offset: offset, className: (0, _classnames2.default)('input-field', className, classes) }, props),
          icon && this.renderIcon(icon, iconClassName),
          _react2.default.createElement('input', {
            className: 'autocomplete',
            id: _id,
            onChange: this._onChange,
            type: 'text',
            value: this.state.value
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: _id },
            title
          ),
          this.renderDropdown(data, minLength)
        )
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  className: _propTypes2.default.string,
  /*
   * The title of the autocomplete component.
   */
  title: _propTypes2.default.string,
  /*
   * An object with the keys of the items to match in autocomplete
   * The values are either null or a location to an image
   */
  data: _propTypes2.default.object.isRequired,
  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  s: _propTypes2.default.number,
  m: _propTypes2.default.number,
  l: _propTypes2.default.number,
  offset: _propTypes2.default.string,
  /*
   * Determine input length before dropdown
   */
  minLength: _propTypes2.default.number
};

exports.default = Autocomplete;