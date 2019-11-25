import React, { cloneElement, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

const Textarea = ({
  id,
  children,
  className,
  s,
  m,
  l,
  xl,
  disabled,
  noLayout,
  placeholder,
  icon,
  label,
  success,
  error,
  iconClassName,
  onChange,
  validate,
  defaultValue,
  value,
  ...props
}) => {
  const _textarea = useRef(null);
  const sizes = { s, m, l, xl };

  let responsiveClasses;
  if (!noLayout) {
    responsiveClasses = { col: true };
    constants.SIZES.forEach(size => {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  const wrapperClasses = cx('input-field', responsiveClasses);

  const textareaProps = {
    placeholder,
    id,
    value,
    defaultValue,
    disabled,
    ...props
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (props['data-length']) {
      const instance = M.CharacterCounter.init(_textarea.current);

      return () => {
        instance && instance.destroy();
      };
    }
  }, [_textarea, props]);

  useEffect(() => {
    if (_textarea.current) {
      M.textareaAutoResize(_textarea.current);
    }
  }, [value]);

  const renderLabel = () =>
    label && (
      <label
        className={cx({
          active: value || placeholder,
          'label-icon': typeof label !== 'string'
        })}
        data-success={success}
        data-error={error}
        htmlFor={id}
      >
        {label}
      </label>
    );

  const renderHelper = () =>
    [error || success] && (
      <span className="helper-text" data-error={error} data-success={success} />
    );

  const renderIcon = () => {
    if (!icon) return;

    return cloneElement(icon, { className: 'prefix' });
  };

  return (
    <div className={wrapperClasses}>
      {renderIcon()}
      <textarea
        {...textareaProps}
        ref={_textarea}
        onChange={onChange}
        className={cx('materialize-textarea', { validate }, className)}
      />
      {renderLabel()}
      {renderHelper()}
      {children}
    </div>
  );
};

Textarea.propTypes = {
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
   * render icon next to input
   */
  icon: PropTypes.node,
  /*
   * icon classname
   */
  iconClassName: PropTypes.string,
  /*
   * textarea label
   */
  label: PropTypes.string,
  /*
   * Input initial value
   */
  defaultValue: PropTypes.string,
  /*
   * predefined value
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
   * textarea classname
   */
  className: PropTypes.string,
  /*
   * onChange callback
   */
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  id: `textarea_${idgen()}`
};

export default Textarea;
