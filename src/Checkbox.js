import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Checkbox = ({
  id,
  className,
  indeterminate,
  filledIn,
  label,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(props.checked);
  const _input = useRef(null);

  useEffect(() => {
    if (_input.current && indeterminate) {
      _input.current.indeterminate = indeterminate;
      _input.current.checked = false;
    }
  }, [indeterminate]);

  delete props.checked;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        className={cx(
          {
            'filled-in': filledIn
          },
          className
        )}
        type="checkbox"
        ref={_input}
        checked={checked}
        onChange={e => {
          setChecked(prevChecked => !prevChecked);
          onChange && onChange(e);
        }}
        {...props}
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

Checkbox.defaultProps = {
  id: `checkbox_${idgen()}`
};

export default Checkbox;
