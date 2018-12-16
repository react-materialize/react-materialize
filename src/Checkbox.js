import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Checkbox = ({
  checked,
  onChange,
  filledIn,
  label,
  disabled,
  value,
  id,
  indeterminate
}) => {
  let computedId;
  if (indeterminate) {
    computedId = 'indeterminate-checkbox';
  } else if (id) {
    computedId = id;
  } else {
    computedId = idgen();
  }

  return (
    <label htmlFor={computedId}>
      <input
        id={computedId}
        className={cx({ 'filled-in': filledIn })}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
        defaultChecked={checked}
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /*
   * checkbox value
   */
  value: PropTypes.string.isRequired,
  /*
   * filled-in styled checkbox
   */
  filledIn: PropTypes.bool,
  /*
   * label next to checkbox
   */
  label: PropTypes.string.isRequired,
  /*
   * Indeterminate Style
   */
  indeterminate: PropTypes.bool,
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

export default Checkbox;
