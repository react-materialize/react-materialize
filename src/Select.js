import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';
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
    const { options } = this.props;

    if (typeof M !== 'undefined') {
      this.instance = M.FormSelect.init(this._selectRef, options);
    }
  }

  componentDidUpdate() {
    let { options, error } = this.props;
    if (error) {
      options = { ...options, classes: cx(options.classes, 'invalid') };
    }

    if (this.instance) {
      this.instance.destroy();
    }

    this.instance = M.FormSelect.init(this._selectRef, options);
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const {
      s,
      m,
      l,
      xl,
      disabled,
      noLayout,
      browserDefault,
      icon,
      label,
      selectClassName,
      success,
      error,
      validate,
      children,
      multiple,
      ...other
    } = this.props;

    const sizes = { s, m, l, xl };

    let responsiveClasses;
    if (!noLayout) {
      responsiveClasses = { col: true };
      constants.SIZES.forEach(size => {
        responsiveClasses[size + sizes[size]] = sizes[size];
      });
    }

    const wrapperClasses = cx('input-field', responsiveClasses);

    const selectProps = {
      type: 'select',
      id: this.id,
      value: this.state.value,
      disabled,
      multiple,
      ...other
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

    const renderHelper = () =>
      [error || success] && (
        <span
          className="helper-text"
          data-error={error}
          data-success={success}
        />
      );

    const renderIcon = () => icon && <Icon className="prefix">{icon}</Icon>;

    const renderOption = child =>
      cloneElement(child, { key: child.props.value });

    const renderOptions = () => Children.map(children, renderOption);

    return (
      <div className={wrapperClasses}>
        {renderIcon()}
        <select
          value={this.state.value}
          ref={el => {
            this._selectRef = el;
          }}
          onChange={this.handleChange}
          className={cx(
            {
              validate,
              multiple,
              ['browser-default']: browserDefault
            },
            selectClassName
          )}
          {...selectProps}
        >
          {renderOptions()}
        </select>
        {renderLabel()}
        {renderHelper()}
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
   * Responsive size for small size screens (Mobile Devices <= 600px)
   */
  s: PropTypes.number,
  /*
   * Responsive size for middle size screens (Tablet Devices > 600px)
   */
  m: PropTypes.number,
  /*
   * Responsive size for large size screens (Desktop Devices > 992px)
   */
  l: PropTypes.number,
  /**
   * Responsive size for extra large screens (Large Desktop Devices > 1200px)
   */
  xl: PropTypes.number,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
  children: PropTypes.any,
  /**
   * Options for the select
   * <a target="_blank" href="https://materializecss.com/select.html#options">https://materializecss.com/select.html</a>
   */
  options: PropTypes.shape({
    classes: PropTypes.string,
    /**
     * Options for the dropdown
     * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
     */
    dropdownOptions: PropTypes.shape({
      alignment: PropTypes.oneOf(['left', 'right']),
      autoTrigger: PropTypes.bool,
      constrainWidth: PropTypes.bool,
      container: PropTypes.node,
      coverTrigger: PropTypes.bool,
      closeOnClick: PropTypes.bool,
      hover: PropTypes.bool,
      inDuration: PropTypes.number,
      outDuration: PropTypes.number,
      onOpenStart: PropTypes.func,
      onOpenEnd: PropTypes.func,
      onCloseStart: PropTypes.func,
      onCloseEnd: PropTypes.func
    })
  })
};

Select.defaultProps = {
  options: {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      closeOnClick: true,
      hover: false,
      inDuration: 150,
      outDuration: 250,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null
    }
  }
};

export default Select;
