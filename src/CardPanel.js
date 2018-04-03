import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardPanel = ({ className, children, ...props }) => {
  const classes = {
    'card-panel': true
  };

  return (
    <div className={cx(classes, className)} {...props}>
      {children}
    </div>
  );
};

CardPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default CardPanel;
