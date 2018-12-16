import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const RadioGroup = ({
  onChange,
  withGap,
  disabled,
  name,
  radioClassNames,
  value,
  options
}) => {
  return (
    <React.Fragment>
      {options.map((radioItem, idx) => (
        <label
          className={radioClassNames}
          htmlFor={`radio${idx}`}
          key={`radio${idx}`}
        >
          <input
            id={`radio${idx}`}
            value={radioItem.value}
            type="radio"
            defaultChecked={radioItem.value === value}
            name={name}
            onChange={onChange}
            disabled={disabled}
            className={cx({ 'with-gap': withGap })}
          />
          <span>{radioItem.label}</span>
        </label>
      ))}
    </React.Fragment>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /*
   * predefined checked value
   */
  value: PropTypes.string,
  /*
   * radio group name
   */
  name: PropTypes.string,
  /*
   * with-gap styled checkbox
   */
  withGap: PropTypes.bool,
  /*
   * onChange callback
   */
  onChange: PropTypes.func,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
  /*
   * classnames passed to label wrapper
   */
  radioClassNames: PropTypes.string
};

export default RadioGroup;
