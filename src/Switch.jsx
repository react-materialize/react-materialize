import { useState } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

const noop = () => {};

const Switch = ({
  id: idProp,
  offLabel,
  onLabel,
  onChange = noop,
  ...props
}) => {
  const [generatedId] = useState(() => `Switch-${idgen()}`);
  const id = idProp === undefined ? generatedId : idProp;

  return (
    <div className="switch">
      <label htmlFor={id}>
        {offLabel}
        <input id={id} type="checkbox" onChange={onChange} {...props} />
        <span className="lever" />
        {onLabel}
      </label>
    </div>
  );
};

Switch.propTypes = {
  /**
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * label for off
   */
  offLabel: PropTypes.string.isRequired,
  /**
   * label for on
   */
  onLabel: PropTypes.string.isRequired,
  /**
   * onChange callback
   */
  onChange: PropTypes.func,
  /**
   * disabled input
   */
  disabled: PropTypes.bool,
  /**
   * initialise checkbox checked
   */
  checked: PropTypes.bool
};

export default Switch;
