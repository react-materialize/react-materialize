import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Checkbox = ({
  className,
  checked,
  onChange,
  filledIn,
  label,
  disabled,
  value,
  id,
  indeterminate,
  ...other
}) => {
  const computedId =
    id ||
    (indeterminate ? `indeterminate-checkbox${idgen()}` : `checkbox${idgen()}`);

  return (
    <label htmlFor={computedId}>
      <input
        id={computedId}
        className={cx({ 'filled-in': filledIn }, className)}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
        checked={checked}
        value={value}
        {...other}
      />
      <span>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
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
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: PropTypes.bool
};

export default Checkbox;
