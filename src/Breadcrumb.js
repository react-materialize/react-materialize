import React from 'react';
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
  children: React.PropTypes.node,
  cols: React.PropTypes.number
};

export default Breadcrumb;
