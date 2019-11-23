import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Section = ({ className, node, id, children, ...other }) => {
  let C = node;
  let classes = {
    section: true
  };

  return (
    <C {...other} id={id} className={cx(classes, className)}>
      {children}
    </C>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  node: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

Section.defaultProps = {
  node: 'div'
};

export default Section;
