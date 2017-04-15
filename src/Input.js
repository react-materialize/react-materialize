import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';
import Icon from './Icon';

class Input extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };

    this._onChange = this._onChange.bind(this);
    this.getMultipleValues = this.getMultipleValues.bind(this);
    this.isSelect = this.isSelect.bind(this);
  }

  componentDidMount () {
    if (this.isMaterialSelect()) {
      $(this.selectInput).material_select();
      $(this.selectInput).on('change', this._onChange);
    }
  }

  componentDidUpdate () {
    if (this.isMaterialSelect() && !this.props.multiple) {
      $(this.selectInput).material_select();
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.isMaterialSelect()) {
      this.setState({
        value: nextProps.defaultValue
      }, () => $(this.selectInput).material_select());
    }
  }

  componentWillUnmount () {
    if (this.isMaterialSelect()) {
      $(this.selectInput).off('change', this._onChange);
    }
  }

  getMultipleValues ({ options }) {
    if (!options) {
      return;
    }

    return Array.from(options).filter(opt => opt.selected).map(opt => opt.value);
  }

  _onChange (e) {
    const { onChange } = this.props;
    var types = {
      'checkbox': e.target.checked,
      'select-multiple': this.getMultipleValues(e.target),
      'default': e.target.value
    };
    const value = types[e.target.type] || types['default'];
    if (onChange) { onChange(e); }

    this.setState({ value });
  }

  render () {
    const {
      browserDefault,
      children,
      className,
      defaultValue,
      error,
      label,
      multiple,
      placeholder,
      success,
      s,
      m,
      l,
      type,
      validate,
      onLabel,
      offLabel,
      ...other
    } = this.props;
    let sizes = { s, m, l };
    this._id = this._id || this.props.id || `input_${idgen()}`;
    let classes = {
      col: true,
      'input-field': type !== 'checkbox' && type !== 'radio'
    };
    constants.SIZES.forEach(size => {
      classes[size + sizes[size]] = sizes[size];
    });
    let inputClasses = {
      validate,
      invalid: error,
      valid: success,
      'browser-default': browserDefault && this.isSelect()
    };
    let C, inputType;
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
    let labelClasses = {
      active: this.state.value || this.isSelect()
    };

    let htmlLabel = label || inputType === 'radio'
      ? <label
        className={cx(labelClasses)}
        data-success={success}
        data-error={error}
        htmlFor={this._id}
        >
        {label}
      </label>
      : null;

    if (this.isSelect()) {
      let options = placeholder && !defaultValue ? [<option disabled key={idgen()}>{placeholder}</option>] : [];
      options = options.concat(React.Children.map(children, (child) =>
        React.cloneElement(child, { 'key': child.props.value })
      ));

      return (
        <div className={cx(classes)}>
          {htmlLabel}
          <select
            {...other}
            multiple={multiple}
            id={this._id}
            className={cx(className, inputClasses)}
            ref={(ref) => (this.selectInput = ref)}
            defaultValue={defaultValue}
          >
            { options }
          </select>
        </div>
      );
    } else if (type === 'switch') {
      return (
        <div className='switch'>
          <label>
            {offLabel || 'Off'}
            <input
              {...other}
              onChange={this._onChange}
              type='checkbox'
            />
            <span className='lever' />
            {onLabel || 'On'}
          </label>
        </div>
      );
    } else {
      let defaultValue = inputType !== 'checkbox' && inputType !== 'radio'
        ? this.state.value
        : defaultValue;

      return (
        <div className={cx(classes)}>
          { this.renderIcon() }
          <C
            {...other}
            className={cx(className, inputClasses)}
            defaultValue={defaultValue}
            id={this._id}
            onChange={this._onChange}
            placeholder={placeholder}
            type={inputType}
          />
          {htmlLabel}
        </div>
      );
    }
  }

  renderIcon () {
    const { icon, children } = this.props;
    if (icon) {
      return <Icon className='prefix'>{icon}</Icon>;
    } else {
      let icon = null;
      if (React.Children.count(children) === 1) {
        icon = React.Children.only(children);
      }
      return icon === null ? null : React.cloneElement(icon, {className: 'prefix'});
    }
  }

  isSelect () {
    return this.props.type === 'select';
  }

  isMaterialSelect () {
    return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
  }
}

Input.propTypes = {
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.string,
  success: PropTypes.string,
  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email
   * @default 'text'
   */
  type: PropTypes.string,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  validate: PropTypes.bool,
  multiple: PropTypes.bool,
  browserDefault: PropTypes.bool,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = { type: 'text' };

export default Input;
