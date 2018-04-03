import React from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';

const Tag = ({ children }) => <Chip close>{children}</Chip>;

Tag.propTypes = {
  children: PropTypes.node
};

export default Tag;
