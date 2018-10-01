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

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }] */


var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      value: props.value || '',
      itemSelected: false
    };

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderDropdown = _this.renderDropdown.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== undefined) {
        this.setState({ value: value });
      }
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
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(data, minLength, limit) {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          itemSelected = _state.itemSelected;


      if (minLength && minLength > value.length || !value || itemSelected) {
        return null;
      }

      var matches = Object.keys(data).filter(function (key) {
        var index = key.toUpperCase().indexOf(value.toUpperCase());
        return index !== -1 && value.length < key.length;
      });
      if (limit) matches = matches.slice(0, limit);
      if (matches.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'ul',
        { className: 'autocomplete-content dropdown-content' },
        matches.map(function (key, idx) {
          var index = key.toUpperCase().indexOf(value.toUpperCase());
          return _react2.default.createElement(
            'li',
            {
              key: key + '_' + idx,
              onClick: _this2._onAutocomplete.bind(_this2, key)
            },
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
        })
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(evt) {
      var onChange = this.props.onChange;

      var value = evt.target.value;
      if (onChange) {
        onChange(evt, value);
      }

      this.setState({ value: value, itemSelected: false });
    }
  }, {
    key: '_onAutocomplete',
    value: function _onAutocomplete(value, evt) {
      var _props = this.props,
          onChange = _props.onChange,
          onAutocomplete = _props.onAutocomplete;

      if (onAutocomplete) {
        onAutocomplete(value);
      }
      if (onChange) {
        onChange(evt, value);
      }

      this.setState({ value: value, itemSelected: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          title = _props2.title,
          data = _props2.data,
          icon = _props2.icon,
          iconClassName = _props2.iconClassName,
          s = _props2.s,
          m = _props2.m,
          l = _props2.l,
          offset = _props2.offset,
          minLength = _props2.minLength,
          placeholder = _props2.placeholder,
          limit = _props2.limit,
          value = _props2.value,
          onChange = _props2.onChange,
          onAutocomplete = _props2.onAutocomplete,
          props = _objectWithoutProperties(_props2, ['id', 'className', 'title', 'data', 'icon', 'iconClassName', 's', 'm', 'l', 'offset', 'minLength', 'placeholder', 'limit', 'value', 'onChange', 'onAutocomplete']);

      var _id = id || 'autocomplete-' + (0, _idgen2.default)();
      var sizes = { s: s, m: m, l: l };
      var classes = {
        col: true
      };
      _constants2.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react2.default.createElement(
        'div',
        _extends({
          offset: offset,
          className: (0, _classnames2.default)('input-field', className, classes)
        }, props),
        icon && this.renderIcon(icon, iconClassName),
        _react2.default.createElement('input', {
          placeholder: placeholder,
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
        this.renderDropdown(data, minLength, limit)
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   */
  id: _propTypes2.default.string,
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
  minLength: _propTypes2.default.number,
  /**
   * The max amount of results that can be shown at once. Default: Infinity
   * */
  limit: _propTypes2.default.number,
  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes2.default.string,
  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes2.default.func,
  /**
   * Called when auto-completed item is selected.
   * Function signature: (value) => ()
   */
  onAutocomplete: _propTypes2.default.func,
  /**
   * The value of the input
   */
  value: _propTypes2.default.string
};

exports.default = Autocomplete;