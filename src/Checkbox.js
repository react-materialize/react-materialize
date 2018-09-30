import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };

    this.id = props.id || idgen();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange } = this.props;
    if (onChange) onChange(event);

    this.setState({ checked: event.target.checked });
  }

  render() {
    const { filledIn, label, disabled, value } = this.props;
    const checkboxClassName = { 'filled-in': filledIn };

    return (
      <label>
        <input
          className={cx(checkboxClassName)}
          disabled={disabled}
          onChange={this.handleChange}
          type="checkbox"
          checked={this.state.checked}
          value={value}
        />
        <span>{label}</span>
      </label>
    );
  }
}

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
