import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Container = ({ className, ...props }) => (
  <div className={cx('container', className)} {...props} />
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
