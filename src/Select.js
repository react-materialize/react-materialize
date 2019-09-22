import React, { Component, Children, cloneElement } from 'react';
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
    const { onChange, multiple } = this.props;

    const value = multiple
      ? this.instance.getSelectedValues()
      : event.target.value;

    if (onChange) onChange(event);

    this.setState({ value });
  }

  componentDidMount() {
    const { options } = this.props;

    if (typeof M !== 'undefined') {
      this.instance = M.FormSelect.init(this._selectRef, options);
    }
  }

  componentDidUpdate(prevProps) {
    const { options, value } = this.props;

    if (prevProps.value !== value) {
      if (this.instance) this.instance.destroy();
      this.instance = M.FormSelect.init(this._selectRef, options);
    }
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
      name
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
      defaultValue: this.state.value,
      disabled,
      multiple,
      name
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
      icon && React.cloneElement(icon, { className: 'prefix' });

    const renderOption = child =>
      cloneElement(child, { key: child.props.value });

    const classes = cx(selectClassName, {
      validate,
      multiple,
      ['browser-default']: browserDefault
    });

    return (
      <div className={wrapperClasses}>
        {renderIcon()}
        <select
          ref={el => {
            this._selectRef = el;
          }}
          onChange={this.handleChange}
          className={classes}
          {...selectProps}
        >
          {Children.map(children, renderOption)}
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
  icon: PropTypes.node,
  /*
   * label text
   */
  label: PropTypes.string,
  /*
   * Input initial value, or array of values if `multiple`
   * remove this prop if no initial value should be checked by default.
   * Controlled component: this value is converted to defaultValue.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /*
   * Add validate class to input
   */
  validate: PropTypes.bool,
  /*
   * Select name tag
   */
  name: PropTypes.string,
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
