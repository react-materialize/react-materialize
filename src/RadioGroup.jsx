import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

const RadioGroup = ({
  id: idProp,
  onChange,
  withGap,
  disabled,
  name,
  radioClassNames,
  value,
  options
}) => {
  const [generatedId] = useState(() => `RadioGroup-${idgen()}`);
  const groupId = idProp === undefined ? generatedId : idProp;

  return (
    <Fragment>
      {options.map((radioItem, idx) => {
        const radioId = `${groupId}-${idx}`;

        return (
          <label className={radioClassNames} htmlFor={radioId} key={radioId}>
            <input
              id={radioId}
              value={radioItem.value}
              type="radio"
              checked={radioItem.value === value}
              name={name}
              onChange={onChange}
              disabled={disabled}
              className={cx({ 'with-gap': withGap })}
            />
            <span>{radioItem.label}</span>
          </label>
        );
      })}
    </Fragment>
  );
};

RadioGroup.propTypes = {
  /**
   * id used as the prefix for each option's input id; generated when omitted
   */
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * predefined checked value
   */
  value: PropTypes.string,
  /**
   * radio group name
   */
  name: PropTypes.string,
  /**
   * with-gap styled checkbox
   */
  withGap: PropTypes.bool,
  /**
   * onChange callback
   */
  onChange: PropTypes.func,
  /**
   * disabled input
   */
  disabled: PropTypes.bool,
  /**
   * classnames passed to label wrapper
   */
  radioClassNames: PropTypes.string
};

export default RadioGroup;
