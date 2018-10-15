import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import constants from './constants';

class Col extends Component {
  render() {
    const {
      children,
      className,
      node: C = 'div',
      s,
      m,
      l,
      xl,
      offset,
      ...other
    } = this.props;

    let sizes = { s, m, l, xl };
    let classes = {
      col: true
    };

    constants.SIZES.forEach(
      size => (classes[size + sizes[size]] = sizes[size])
    );

    if (offset) {
      offset.split(' ').forEach(off => (classes['offset-' + off] = true));
    }

    return (
      <C {...other} className={cx(classes, className)}>
        {children}
      </C>
    );
  }
}

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
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: PropTypes.string
};

export default Col;
