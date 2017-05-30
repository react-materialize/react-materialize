import React from 'react';
import PropTypes from 'prop-types';
import constants from './constants';
import cx from 'classnames';

const Icon = (props) => {
  let classes = {
    'material-icons': true
  };
  constants.PLACEMENTS.forEach(p => {
    classes[p] = props[p];
  });

  constants.ICON_SIZES.forEach(s => {
    classes[s] = props[s];
  });

  return (
    <i className={cx(classes, props.className)}>{props.children}</i>
  );
};

Icon.propTypes = {
  /*
   * Classname passed to i tag
   */
  className: PropTypes.string,
  /*
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: PropTypes.string,
  /*
   * Placement for icon if used beside a text ↓
   */
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  /*
   * Sizes for icons ↓
   */
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};

export default Icon;
