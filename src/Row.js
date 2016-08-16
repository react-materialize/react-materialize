import React from 'react';
import cx from 'classnames';

const Row = ({ children, className, node: Node = 'div' }) =>
  <Node className={cx('row', className)}>{ children }</Node>;

Row.propTypes = {
  node: React.PropTypes.node
};

export default Row;
