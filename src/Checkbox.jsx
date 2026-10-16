import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Checkbox = ({
  id: idProp,
  className,
  indeterminate,
  filledIn,
  label,
  onChange,
  ...props
}) => {
  const [generatedId] = useState(() => `Checkbox_${idgen()}`);
  const id = idProp === undefined ? generatedId : idProp;
  const [checked, setChecked] = useState(Boolean(props.checked));
  const _input = useRef(null);

  useEffect(() => {
    if (_input.current) {
      _input.current.indeterminate = indeterminate;
      _input.current.checked = false;
      setChecked(false);
    }
  }, [indeterminate]);

  useEffect(() => {
    setChecked(Boolean(props.checked));
    _input.current.checked = Boolean(props.checked);
  }, [props.checked]);

  return (
    <label htmlFor={id}>
      <input
        {...props}
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
      />
      <span>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  /**
   * checkbox value
   */
  value: PropTypes.string.isRequired,
  /**
   * filled-in styled checkbox
   */
  filledIn: PropTypes.bool,
  /**
   * label next to checkbox
   */
  label: PropTypes.string.isRequired,
  /**
   * Indeterminate Style
   */
  indeterminate: PropTypes.bool,
  /**
   * onChange callback
   */
  onChange: PropTypes.func,
  /**
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  /**
   * disabled input
   */
  disabled: PropTypes.bool,
  /**
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: PropTypes.bool
};

export default Checkbox;
