import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.id = props.id || idgen();

    if (props.password) {
      this.id = 'password';
    }

    if (props.email) {
      this.id = 'email';
    }
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value !== prevProps.value) {
      M.updateTextFields();
    }
  }

  render() {
    const {
      s,
      m,
      l,
      xl,
      disabled,
      noLayout,
      placeholder,
      icon,
      label,
      inputClassName,
      success,
      error,
      password,
      email,
      validate,
      value,
      type
    } = this.props;

    const sizes = { s, m, l, xl };

    let responsiveClasses;
    if (!noLayout) {
      responsiveClasses = { col: true };
      constants.SIZES.forEach(size => {
        responsiveClasses[size + sizes[size]] = sizes[size];
      });
    }

    const wrapperClasses = cx('input-field', responsiveClasses);

    let computedType;
    if (type) {
      computedType = type;
    } else if (password) {
      computedType = 'password';
    } else if (email) {
      computedType = 'email';
    } else {
      computedType = 'text';
    }

    const inputProps = {
      placeholder,
      type: computedType,
      id: this.id,
      defaultValue: value,
      disabled
    };

    const renderLabel = () =>
      label && (
        <label
          className={cx({ active: value || placeholder })}
          data-success={success}
          data-error={error}
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      );

    const renderHelper = () =>
      [error || success] && (
        <span
          className="helper-text"
          data-error={error}
          data-success={success}
        />
      );

    const renderIcon = () =>
      icon && <i className="material-icons prefix">{icon}</i>;

    return (
      <div className={wrapperClasses}>
        {renderIcon()}
        <input
          ref={el => {
            this.inputRef = el;
          }}
          onChange={this.handleChange}
          className={cx({ validate }, inputClassName)}
          {...inputProps}
        />
        {renderLabel()}
        {renderHelper()}
      </div>
    );
  }
}

TextInput.propTypes = {
  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: PropTypes.bool,
  /*
   * Responsive size for Mobile Devices
   */
  s: PropTypes.number,
  /*
   * Responsive size for Tablet Devices
   */
  m: PropTypes.number,
  /*
   * Responsive size for Desktop Devices
   */
  l: PropTypes.number,
  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: PropTypes.number,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
  /*
   * Placeholder string
   */
  placeholder: PropTypes.string,
  /*
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  /*
   * prefix icon
   */
  icon: PropTypes.string,
  /*
   * label text
   */
  label: PropTypes.string,
  /*
   * Input initial value
   */
  value: PropTypes.string,
  /*
   * Add validate class to input
   */
  validate: PropTypes.bool,
  /*
   * Custom success message
   */
  success: PropTypes.string,
  /*
   * Custom error message
   */
  error: PropTypes.string,
  /*
   * Additional classes for input
   */
  inputClassName: PropTypes.string,
  /*
   * override type="text"
   */
  type: PropTypes.string,
  /*
   * onChange callback
   */
  onChange: PropTypes.func,
  /*
   * password type
   */
  password: PropTypes.bool,
  /*
   * email type
   */
  email: PropTypes.bool
};

export default TextInput;
