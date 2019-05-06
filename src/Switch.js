import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

const Switch = ({
  id,
  className,
  checked,
  onChange,
  disabled,
  offLabel,
  onLabel
}) => {
  const computedId = id || idgen();

  return (
    <div className="switch">
      <label htmlFor={computedId}>
        {offLabel}
        <input
          id={computedId}
          className={className}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          checked={checked}
        />
        <span className="lever" />
        {onLabel}
      </label>
    </div>
  );
};

Switch.propTypes = {
  /*
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  className: PropTypes.string,
  /*
   * label for off
   */
  offLabel: PropTypes.string.isRequired,
  /*
   * label for on
   */
  onLabel: PropTypes.string.isRequired,
  /*
   * onChange callback
   */
  onChange: PropTypes.func,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
  /*
   * initialise checkbox checked
   */
  checked: PropTypes.bool
};

export default Switch;
