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

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };

    _this._onChange = _this._onChange.bind(_this);
    _this.getMultipleValues = _this.getMultipleValues.bind(_this);
    _this.isSelect = _this.isSelect.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).material_select();
        $(this.selectInput).on('change', this._onChange);
      }
      if (this.isDatePicker) {
        $(this.dateInput).pickadate(this.props.options);
        $(this.dateInput).on('change', this._onChange);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isMaterialSelect() && !this.props.multiple) {
        $(this.selectInput).material_select();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.isMaterialSelect()) {
        this.setState({
          value: nextProps.defaultValue
        }, function () {
          return $(_this2.selectInput).material_select();
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).off('change', this._onChange);
      }
    }
  }, {
    key: 'getMultipleValues',
    value: function getMultipleValues(_ref) {
      var options = _ref.options;

      if (!options) {
        return;
      }

      return Array.from(options).filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        return opt.value;
      });
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      var onChange = this.props.onChange;

      var types = {
        'checkbox': e.target.checked,
        'select-multiple': this.getMultipleValues(e.target),
        'default': e.target.value
      };
      var value = types[e.target.type] || types['default'];
      if (onChange) {
        onChange(e, value);
      }

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          browserDefault = _props.browserDefault,
          children = _props.children,
          className = _props.className,
          labelClassName = _props.labelClassName,
          defaultValue = _props.defaultValue,
          error = _props.error,
          label = _props.label,
          multiple = _props.multiple,
          placeholder = _props.placeholder,
          success = _props.success,
          s = _props.s,
          m = _props.m,
          l = _props.l,
          type = _props.type,
          validate = _props.validate,
          onLabel = _props.onLabel,
          offLabel = _props.offLabel,
          other = _objectWithoutProperties(_props, ['browserDefault', 'children', 'className', 'labelClassName', 'defaultValue', 'error', 'label', 'multiple', 'placeholder', 'success', 's', 'm', 'l', 'type', 'validate', 'onLabel', 'offLabel']);

      var sizes = { s: s, m: m, l: l };
      this._id = this._id || this.props.id || 'input_' + (0, _idgen2.default)();
      var classes = {
        col: true,
        'input-field': type !== 'checkbox' && type !== 'radio'
      };
      _constants2.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });
      var inputClasses = {
        validate: validate,
        invalid: error,
        valid: success,
        'browser-default': browserDefault && this.isSelect()
      };
      var C = void 0,
          inputType = void 0;
      switch (type) {
        case 'textarea':
          C = 'textarea';
          inputClasses['materialize-textarea'] = true;
          break;
        case 'switch':
          C = 'input';
          inputType = 'checkbox';
          break;
        default:
          C = 'input';
          inputType = type || 'text';
      }
      var labelClasses = {
        active: this.state.value || this.isSelect()
      };

      var htmlLabel = label || inputType === 'radio' ? _react2.default.createElement(
        'label',
        {
          className: (0, _classnames2.default)(labelClasses, labelClassName),
          'data-success': success,
          'data-error': error,
          htmlFor: this._id
        },
        label
      ) : null;

      if (this.isSelect()) {
        var options = placeholder && !defaultValue ? [_react2.default.createElement(
          'option',
          { disabled: true, key: (0, _idgen2.default)() },
          placeholder
        )] : [];
        options = options.concat(_react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { 'key': child.props.value });
        }));

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          htmlLabel,
          _react2.default.createElement(
            'select',
            _extends({}, other, {
              multiple: multiple,
              id: this._id,
              className: (0, _classnames2.default)(className, inputClasses),
              ref: function ref(_ref2) {
                return _this3.selectInput = _ref2;
              },
              defaultValue: defaultValue
            }),
            options
          )
        );
      } else if (type === 'date') {
        this.isDatePicker = true;
        delete other.options;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          _react2.default.createElement(C, _extends({}, other, {
            className: (0, _classnames2.default)(className, inputClasses),
            defaultValue: defaultValue,
            id: this._id,
            ref: function ref(_ref3) {
              return _this3.dateInput = _ref3;
            },
            placeholder: placeholder,
            type: 'date'
          })),
          htmlLabel
        );
      } else if (type === 'switch') {
        return _react2.default.createElement(
          'div',
          { className: 'switch' },
          _react2.default.createElement(
            'label',
            null,
            offLabel || 'Off',
            _react2.default.createElement('input', _extends({}, other, {
              onChange: this._onChange,
              type: 'checkbox'
            })),
            _react2.default.createElement('span', { className: 'lever' }),
            onLabel || 'On'
          )
        );
      } else {
        var _defaultValue = inputType !== 'checkbox' && inputType !== 'radio' ? this.state.value : _defaultValue;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          this.renderIcon(),
          _react2.default.createElement(C, _extends({}, other, {
            className: (0, _classnames2.default)(className, inputClasses),
            defaultValue: _defaultValue,
            id: this._id,
            onChange: this._onChange,
            placeholder: placeholder,
            type: inputType
          })),
          htmlLabel
        );
      }
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var _props2 = this.props,
          icon = _props2.icon,
          children = _props2.children;

      if (icon) {
        return _react2.default.createElement(
          _Icon2.default,
          { className: 'prefix' },
          icon
        );
      } else {
        var _icon = null;
        if (_react2.default.Children.count(children) === 1) {
          _icon = _react2.default.Children.only(children);
        }
        return _icon === null ? null : _react2.default.cloneElement(_icon, { className: 'prefix' });
      }
    }
  }, {
    key: 'isSelect',
    value: function isSelect() {
      return this.props.type === 'select';
    }
  }, {
    key: 'isMaterialSelect',
    value: function isMaterialSelect() {
      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  s: _propTypes2.default.number,
  m: _propTypes2.default.number,
  l: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  label: _propTypes2.default.node,
  error: _propTypes2.default.string,
  success: _propTypes2.default.string,
  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email
   * @default 'text'
   */
  type: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  placeholder: _propTypes2.default.string,
  id: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  name: _propTypes2.default.string,
  validate: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  browserDefault: _propTypes2.default.bool,
  onLabel: _propTypes2.default.string,
  offLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.any,
  /**
   * Value used to set a initial value
   */
  value: _propTypes2.default.string
};

Input.defaultProps = { type: 'text' };

exports.default = Input;