import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PaginationButton = ({
  active = false,
  children,
  className,
  disabled = false,
  href,
  onSelect
}) => {
  const classes = {
    'waves-effect': true,
    disabled,
    active
  };

  const linkProps = href ? { href } : null;

  return (
    <li className={cx(classes, className)} onClick={onSelect}>
      <a {...linkProps}>{children}</a>
    </li>
  );
};

PaginationButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onSelect: PropTypes.func
};

export default PaginationButton;
