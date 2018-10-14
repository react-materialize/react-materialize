import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionItem = props => {
  const { active, children, className, avatar, ...other } = props;

  const classes = cx(
    'collection-item',
    {
      active,
      avatar
    },
    className
  );

  let C = props.href ? 'a' : 'li';

  return (
    <C {...other} className={classes}>
      {children}
    </C>
  );
};

CollectionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  avatar: PropTypes.bool
};

CollectionItem.defaultProps = {
  active: false,
  avatar: false
};

export default CollectionItem;
