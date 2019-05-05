import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { indeterminate } = this.props;

    if (this._input && indeterminate) {
      this._input.indeterminate = indeterminate;
      this._input.checked = false;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this._input.indeterminate = this.props.indeterminate;
    }
  }

  render() {
    const {
      id,
      className,
      indeterminate,
      filledIn,
      disabled,
      onChange,
      checked,
      value,
      label
    } = this.props;

    let computedId = id || idgen();

    if (indeterminate) {
      computedId = `indeterminate-checkbox-${idgen()}`;
    }

    return (
      <label htmlFor={computedId}>
        <input
          id={computedId}
          className={cx(
            {
              'filled-in': filledIn
            },
            className
          )}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          defaultChecked={checked}
          value={value}
          ref={input => (this._input = input)}
        />
        <span>{label}</span>
      </label>
    );
  }
}

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
