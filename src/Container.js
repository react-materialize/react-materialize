import React from 'react';
import cx from 'class-names';
import PropTypes from 'prop-types';

const Container = props => <div className={cx("container", props.className)}>{props.children}</div>;

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
