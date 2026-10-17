import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const Checkbox = ({
  id: idProp,
  className,
  checked = false,
  // Not supported: the box always follows `checked`. Kept off the <input> so
  // React doesn't warn about an input with both checked and defaultChecked.
  defaultChecked: _defaultChecked,
  indeterminate,
  filledIn,
  label,
  onChange,
  ...props
}) => {
  const [generatedId] = useState(() => `Checkbox_${idgen()}`);
  const id = idProp === undefined ? generatedId : idProp;
  // `?? false` also covers `checked={null}`: the <input> must always get a
  // boolean, or React treats it as uncontrolled.
  const [isChecked, setChecked] = useState(checked ?? false);
  const _input = useRef(null);

  useEffect(() => {
    // `indeterminate` only exists as a DOM property, not as an attribute.
    _input.current.indeterminate = indeterminate;
    setChecked(false);
  }, [indeterminate]);

  useEffect(() => {
    setChecked(checked ?? false);
  }, [checked]);

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
        checked={isChecked}
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
