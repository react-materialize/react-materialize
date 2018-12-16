import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Switch = ({ checked, onChange, disabled, id, offLabel, onLabel }) => {
  const computedId = id || idgen();

  return (
    <div className="switch">
      <label htmlFor={computedId}>
        {offLabel}
        <input
          id={computedId}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          defaultChecked={checked}
        />
        <span className="lever" />
        {onLabel}
      </label>
    </div>
  );
};

Switch.propTypes = {
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
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
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
