import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

class Select extends Component {
  constructor(props) {
    super(props);

    this.id = props.id || idgen();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: props.value };
  }

  handleChange(event) {
    const { onChange } = this.props;
    let value = event.target.value;

    if (this.props.multiple) {
      value = this.instance.getSelectedValues();
    }

    if (onChange) onChange(event);

    this.setState({ value });
  }

  componentDidMount() {
    if (typeof M !== 'undefined') {
      this.instance = M.FormSelect.init(this._selectRef);
    }
  }

  render() {
    const {
      s,
      m,
      l,
      disabled,
      noLayout,
      placeholder,
      icon,
      label,
      selectClassName,
      success,
      error,
      validate,
      children,
      multiple,
      value,
      type
    } = this.props;

    const sizes = { s, m, l };

    let responsiveClasses;
    if (!noLayout) {
      responsiveClasses = { col: true };
      constants.SIZES.forEach(size => {
        responsiveClasses[size + sizes[size]] = sizes[size];
      });
    }

    const wrapperClasses = cx('input-field', responsiveClasses);

    const selectProps = {
      placeholder,
      type: 'select',
      id: this.id,
      value: this.state.value,
      disabled,
      multiple
    };

    const renderLabel = () =>
      label && (
        <label
          data-success={success}
          data-error={error}
          htmlFor={selectProps.id}
        >
          {label}
        </label>
      );

    const renderIcon = () =>
      icon && <i className="material-icons prefix">{icon}</i>;

    const renderOption = child =>
      React.cloneElement(child, { key: child.props.value });

    const renderOptions = () => React.Children.map(children, renderOption);

    return (
      <div className={wrapperClasses}>
        {renderIcon()}
        <select
          value={this.state.value}
          ref={el => {
            this._selectRef = el;
          }}
          onChange={this.handleChange}
          className={cx({ validate, multiple }, selectClassName)}
          {...selectProps}
        >
          {renderOptions()}
        </select>
        {renderLabel()}
      </div>
    );
  }
}

Select.propTypes = {
  /*
   * Use browser default styles
   */
  browserDefault: PropTypes.bool,
  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: PropTypes.bool,
  /*
   * Responsive size for Small
   */
  s: PropTypes.number,
  /*
   * Responsive size for Medium
   */
  m: PropTypes.number,
  /*
   * Responsive size for Large
   */
  l: PropTypes.number,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
  /*
   * Placeholder string
   */
  placeholder: PropTypes.string,
  /*
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  /*
   * prefix icon
   */
  icon: PropTypes.string,
  /*
   * label text
   */
  label: PropTypes.string,
  /*
   * Input initial value
   */
  value: PropTypes.string,
  /*
   * Add validate class to input
   */
  validate: PropTypes.bool,
  /*
   * Custom success message
   */
  success: PropTypes.string,
  /*
   * Custom error message
   */
  error: PropTypes.string,
  /*
   * Additional classes for input
   */
  selectClassName: PropTypes.string,
  /*
   * override type="text"
   */
  type: PropTypes.string,
  /*
   * onChange callback
   */
  onChange: PropTypes.func,
  /*
   * Render a multiple dropdown,
   * use instance.getSelectedValues()
   * to get array of selected values
   */
  multiple: PropTypes.bool,
  children: PropTypes.any
};

export default Select;
