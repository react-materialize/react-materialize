import React from 'react';
import cx from 'classnames';

import constants from './constants';

const Col = ({
  children,
  className,
  node = 'div',
  offset,
  ...props
}) => {
  let Child = node;
  let classes = { col: true };
  constants.SIZES.forEach(s => {
    if (props[s]) {
      classes[s + props[s]] = true;
    }
  });

  if (offset) {
    offset.split(' ').forEach(off => {
      classes['offset-' + off] = true;
    });
  }

  return (
    <Child className={cx(classes, className)}>
      {children}
    </Child>
  );
};

Col.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  /**
   * Columns for large size screens
   */
  l: React.PropTypes.number,
  /**
   * Columns for middle size screens
   */
  m: React.PropTypes.number,
  /**
   * The node to be used for the column
   * @default div
   */
  node: React.PropTypes.node,
  /**
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: React.PropTypes.string,
  /**
   * Columns for small size screens
   */
  s: React.PropTypes.number
};

export default Col;
