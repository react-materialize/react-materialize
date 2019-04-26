import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';

// This is just a holder for the props and children for tab, thus
// there is no logic here.
const Tab = ({ children, idx, className }) => (
  <Col id={`tab_${idx}`} s={12} className={className}>
    {children}
  </Col>
);
Tab.propTypes = {
  children: PropTypes.node,
  idx: PropTypes.string,
  className: PropTypes.string
};

Tab.defaultProps = {
  active: false,
  disabled: false
};

export default Tab;
