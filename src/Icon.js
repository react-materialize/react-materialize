import React from 'react';
import PropTypes from 'prop-types';
import constants from './constants';
import cx from 'classnames';

const Icon = (props) => {
  let classes = {
    'material-icons': true
  };
  constants.PLACEMENTS.forEach(p => {
    classes[p] = props[p];
  });

  constants.ICON_SIZES.forEach(s => {
    classes[s] = props[s];
  });

  return (
    <i className={cx(classes, props.className)}>{props.children}</i>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

constants.PLACEMENTS.forEach(p => {
  Icon.propTypes[p] = PropTypes.bool;
});

constants.ICON_SIZES.forEach(s => {
  Icon.propTypes[s] = PropTypes.bool;
});

export default Icon;
