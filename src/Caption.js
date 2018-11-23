import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import constants from './constants';

const Caption = ({ className, placement, children, ...props }) => {
  return (
    <div
      className={cx(
        'caption',
        {
          [`${placement}-align`]: placement
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Placement of the caption
   * @default 'center'
   */
  placement: PropTypes.oneOf(constants.PLACEMENTS),
  style: PropTypes.object
};

Caption.propDefault = {
  placement: 'center'
};

export default Caption;
