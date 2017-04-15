import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = ({ children, className, node: Node = 'div' }) =>
  <Node className={cx('row', className)}>{ children }</Node>;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  node: PropTypes.node
};

export default Row;
