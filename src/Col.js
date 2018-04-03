import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import constants from './constants';

const Col = ({
  children,
  className,
  node: C = 'div',
  s,
  m,
  l,
  offset,
  ...other
}) => {
  let sizes = { s, m, l };
  let classes = { col: true };
  constants.SIZES.forEach(size => {
    classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(off => {
      classes['offset-' + off] = true;
    });
  }

  return (
    <C {...other} className={cx(classes, className)}>
      {children}
    </C>
  );
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Columns for large size screens
   */
  l: PropTypes.number,
  /**
   * Columns for middle size screens
   */
  m: PropTypes.number,
  /**
   * The node to be used for the column
   * @default div
   */
  node: PropTypes.node,
  /**
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: PropTypes.string,
  /**
   * Columns for small size screens
   */
  s: PropTypes.number
};

export default Col;
