import React, { PropTypes } from 'react';
import Chip from './Chip';

const Tag = ({ children }) =>
  <Chip close>{children}</Chip>;

Tag.propTypes = {
  children: PropTypes.node
};

export default Tag;
