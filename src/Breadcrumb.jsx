import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Col from './Col';

const Breadcrumb = ({ cols = 12, children, className }) => (
  <nav className={cx('row', className)}>
    <div className="nav-wrapper">
      <Col s={cols}>
        {React.Children.map(children, item =>
          React.cloneElement(item, { className: 'breadcrumb' })
        )}
      </Col>
    </div>
  </nav>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
  /**
   * responsive col value
   * @default 12
   */
  cols: PropTypes.number,
  className: PropTypes.string
};

export default Breadcrumb;
