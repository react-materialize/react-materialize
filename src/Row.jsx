import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = ({ children, className, node: Node = 'div', ...props }) => (
  <Node className={cx('row', className)} {...props}>
    {children}
  </Node>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  node: PropTypes.node
};

export default Row;
