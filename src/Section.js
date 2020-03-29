import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Section = ({ node = 'div', className, ...rest }) => {
  const Component = node;

  return <Component className={cx('section', className)} {...rest} />;
};

Section.propTypes = {
  children: PropTypes.node,
  node: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

export default Section;
