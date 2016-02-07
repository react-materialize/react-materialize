import React from 'react';
import cx from 'classnames';

const CardPanel = ({
  className,
  children,
  ...props
}) => {
  const classes = {
    'card-panel': true
  };

  return (
      <div className={cx(classes, className)}>
        <span>{children}</span>
      </div>
  );
}

export default CardPanel;
