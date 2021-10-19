import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { sizesClass } from './tools/sizes';

const extendClassname = (base, classes, namespace) => {
  return namespace.split(' ').reduce((acc, current) => {
    acc[`${base}-${current}`] = true;

    return acc;
  }, classes);
};

const Col = ({
  children,
  className,
  node: C = 'div',
  s,
  m,
  l,
  xl,
  offset,
  push,
  pull,
  ...other
}) => {
  let sizes = { s, m, l, xl };
  let classes = sizesClass({ col: true }, sizes);

  if (typeof offset !== 'undefined') {
    classes = extendClassname('offset', classes, offset);
  }

  if (typeof push !== 'undefined') {
    classes = extendClassname('push', classes, push);
  }

  if (typeof pull !== 'undefined') {
    classes = extendClassname('pull', classes, pull);
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
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: PropTypes.number,
  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: PropTypes.number,
  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: PropTypes.number,
  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: PropTypes.number,
  /**
   * The node to be used for the column
   * @default div
   */
  node: PropTypes.node,
  /**
   * To offset/push/pull, simply add s2 to the class where s signifies the screen
   * class-prefix (s = mobile devices, m = tablet devices, l = desktop devices, xl= large desktop devices) and the number after
   * is the number of columns you want to offset/push/pull by.
   */
  offset: PropTypes.string,
  push: PropTypes.string,
  pull: PropTypes.string
};

export default Col;
