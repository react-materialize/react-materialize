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
  title: PropTypes.string.isRequired,
  idx: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tabWidth: PropTypes.number
};

export default Tab;
