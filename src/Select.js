import React, {
  Children,
  cloneElement,
  useRef,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

const Select = ({
  id,
  s,
  m,
  l,
  xl,
  noLayout,
  browserDefault,
  icon,
  label,
  className,
  success,
  error,
  validate,
  children,
  multiple,
  options,
  value,
  onChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const _selectRef = useRef(null);
  const _formSelectInstance = useRef(null);

  useEffect(() => {
    _formSelectInstance.current = M.FormSelect.init(
      _selectRef.current,
      options
    );

    return () => {
      _formSelectInstance.current && _formSelectInstance.current.destroy();
    };
  }, [options]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const sizes = { s, m, l, xl };
  let responsiveClasses = {};

  if (!noLayout) {
    responsiveClasses = { col: true };
    constants.SIZES.forEach(size => {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  const renderOption = child => cloneElement(child, { key: child.props.value });

  const handleChange = e => {
    let value = e.target.value;

    if (multiple) {
      value = _formSelectInstance.current.getSelectedValues();
    }

    onChange && onChange(e);

    setSelectedValue(value);
  };

  return (
    <div className={cx('input-field', responsiveClasses)}>
      {Boolean(icon) && cloneElement(icon, { className: 'prefix' })}
      <select
        {...props}
        type="select"
        id={id}
        value={selectedValue}
        ref={_selectRef}
        onChange={handleChange}
        className={cx(className, {
          validate,
          multiple,
          ['browser-default']: browserDefault
        })}
        multiple={multiple}
      >
        {Children.map(children, renderOption)}
      </select>
      {Boolean(label) && (
        <label data-success={success} data-error={error} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

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
  className: PropTypes.string,
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
  id: `Select-${idgen()}`,
  multiple: false,
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
