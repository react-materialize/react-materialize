import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';

const Breadcrumb = ({ children }) => (
  <nav className='row'>
    <div className='nav-wrapper'>
      <Col s={12}>
        { renderChildren(children) }
      </Col>
    </div>
  </nav>
);

const renderChildren = (children) => {
  return React.Children.map(children, (item) => {
    return React.cloneElement(item, { className: 'breadcrumb' });
  });
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number
};

export default Breadcrumb;
