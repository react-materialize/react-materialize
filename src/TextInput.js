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
      this.id = `password${idgen()}`;
    }

    if (props.email) {
      this.id = `email${idgen()}`;
    }
  }

  componentDidMount() {
    if (typeof M !== undefined) {
      // eslint-disable-next-line react/prop-types
      this.props['data-length'] && M.CharacterCounter.init(this.inputRef);
    }
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value !== prevProps.value && typeof M !== 'undefined') {
      M.updateTextFields();
    }
  }

  render() {
    const {
      children,
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
      defaultValue,
      value,
      type,
      ...other
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
      value,
      defaultValue,
      disabled,
      ...other
    };

    const renderLabel = () =>
      label && (
        <label
          className={cx({
            active: value || placeholder,
            'label-icon': typeof label !== 'string'
          })}
          data-success={success}
          data-error={error}
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      );

    const renderHelper = () =>
      (error || success) && (
        <span
          className="helper-text"
          data-error={error}
          data-success={success}
        />
      );

    const renderIcon = () => {
      if (!icon) return;

      if (typeof icon === 'string') {
        return <i className="material-icons prefix">{icon}</i>;
      }

      return React.cloneElement(icon, { className: 'prefix' });
    };

    return (
      <div className={wrapperClasses}>
        {renderIcon()}
        <input
          ref={el => {
            this.inputRef = el;
          }}
          className={cx({ validate }, inputClassName)}
          {...inputProps}
        />
        {renderLabel()}
        {renderHelper()}
        {children}
      </div>
    );
  }
}

TextInput.propTypes = {
  children: PropTypes.node,
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
   * prefix icon, name of the icon or a node
   */
  icon: PropTypes.node,
  /*
   * label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /*
   * Input initial value
   */
  defaultValue: PropTypes.string,
  /*
   * Input value
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
