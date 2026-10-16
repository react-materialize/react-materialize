import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';
import { renderPrefixIcon } from './utils';

const TextInput = React.forwardRef((props, ref) => {
  const dataLength = props['data-length'];
  const inputRef = ref || createRef(null);
  const [generatedId] = useState(() => `TextInput-${idgen()}`);

  useEffect(() => {
    if (inputRef && dataLength) {
      M.CharacterCounter.init(inputRef.current);
    }
  }, [dataLength, inputRef]);

  useEffect(() => {
    M.updateTextFields();
  }, [props.children]);

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
    id: idProp,
    ...other
  } = props;

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
    value,
    defaultValue,
    disabled,
    id: idProp === undefined ? generatedId : idProp,
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
      <span className="helper-text" data-error={error} data-success={success} />
    );

  if (type === 'file') {
    return (
      <div className={`${wrapperClasses} file-field`}>
        <div className="btn">
          <span>{label}</span>
          <input
            type="file"
            className={cx({ validate }, inputClassName)}
            {...inputProps}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
        {renderHelper()}
        {children}
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      {renderPrefixIcon(icon)}
      <input
        ref={inputRef}
        className={cx({ validate }, inputClassName)}
        {...inputProps}
      />
      {renderLabel()}
      {renderHelper()}
      {children}
    </div>
  );
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: PropTypes.bool,
  /**
   * Responsive size for Mobile Devices
   */
  s: PropTypes.number,
  /**
   * Responsive size for Tablet Devices
   */
  m: PropTypes.number,
  /**
   *  Responsive size for Desktop Devices
   */
  l: PropTypes.number,
  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: PropTypes.number,
  /**
   * disabled input
   */
  disabled: PropTypes.bool,
  /**
   * Placeholder string
   */
  placeholder: PropTypes.string,
  /**
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  /**
   * prefix icon, name of the icon or a node
   */
  icon: PropTypes.node,
  /**
   * label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Input initial value
   */
  defaultValue: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Add validate class to input
   */
  validate: PropTypes.bool,
  /**
   * Custom success message
   */
  success: PropTypes.string,
  /**
   * Custom error message
   */
  error: PropTypes.string,
  /**
   * Additional classes for input
   */
  inputClassName: PropTypes.string,
  /**
   * override type="text"
   */
  type: PropTypes.string,
  /**
   * onChange callback
   */
  onChange: PropTypes.func,
  /**
   * password type
   */
  password: PropTypes.bool,
  /**
   * email type
   */
  email: PropTypes.bool,
  /**
   * children
   */
  children: PropTypes.node
};

export default TextInput;
