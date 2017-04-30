import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';

const Breadcrumb = ({ cols, children }) => (
  <nav className='row'>
    <div className='nav-wrapper'>
      <Col s={cols}>
        { React.Children.map(children, item => React.cloneElement(item, { className: 'breadcrumb' })) }
      </Col>
    </div>
  </nav>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number
};

Breadcrumb.defaultProps = {
  cols: 12
};

export default Breadcrumb;
