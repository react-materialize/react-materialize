import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';
import Icon from './Icon';
import constants from './constants';

class Textarea extends Component {
  componentDidUpdate() {
    if (typeof M !== 'undefined') {
      M.textareaAutoResize(this._textarea);
    }
  }

  renderIcon(icon, className) {
    return (
      <Icon className={cx('material-icons prefix', className)}>{icon}</Icon>
    );
  }

  render() {
    const {
      className,
      s,
      m,
      l,
      xl,
      noLayout,
      iconClassName,
      icon,
      label,
      id,
      onChange,
      ...other
    } = this.props;

    const computedId = id || idgen();

    const sizes = { s, m, l, xl };

    let responsiveClasses;
    if (!noLayout) {
      responsiveClasses = { col: true };
      constants.SIZES.forEach(size => {
        responsiveClasses[size + sizes[size]] = sizes[size];
      });
    }

    const wrapperClasses = cx('input-field', responsiveClasses);

    return (
      <div className={wrapperClasses}>
        {icon && this.renderIcon(icon, iconClassName)}
        <textarea
          {...other}
          ref={input => {
            this._textarea = input;
          }}
          onChange={onChange}
          id={computedId}
          className={cx('materialize-textarea', className)}
        />
        <label htmlFor={computedId}>{label}</label>
      </div>
    );
  }
}

Textarea.propTypes = {
  /*
 * Strip away all layout classes such as col and sX
 */
  noLayout: PropTypes.bool,
  /*
   * Responsive size for Mobile Devices
   */
  s: PropTypes.number,
  /*
   * Responsive size for Tablet Devices
   */
  m: PropTypes.number,
  /*
   * Responsive size for Desktop Devices
   */
  l: PropTypes.number,
  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: PropTypes.number,
  /*
   * render icon next to input
   */
  icon: PropTypes.string,
  /*
   * icon classname
   */
  iconClassName: PropTypes.string,
  /*
   * textarea label
   */
  label: PropTypes.string,
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
  * predefined value
  */
  value: PropTypes.string,
  /*
  * textarea classname
  */
  className: PropTypes.string
};

export default Textarea;
