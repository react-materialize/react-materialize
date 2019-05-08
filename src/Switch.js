import React from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

const Switch = ({
  id,
  checked,
  onChange,
  disabled,
  offLabel,
  onLabel,
  ...props
}) => {
  return (
    <div className="switch">
      <label htmlFor={id}>
        {offLabel}
        <input
          id={id}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          checked={checked}
          {...props}
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
  id: PropTypes.string.isRequired,
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

Switch.defaultProps = {
  id: `switch-${idgen()}`
};

export default Switch;
