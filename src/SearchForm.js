import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextInput from './TextInput';

const SearchForm = ({ searchIcon, closeIcon }) => (
  <form>
    <TextInput label={searchIcon} type="search">
      {closeIcon}
    </TextInput>
  </form>
);

SearchForm.propTypes = {
  searchIcon: PropTypes.node.isRequired,
  closeIcon: PropTypes.node.isRequired
};

SearchForm.defaultProps = {
  searchIcon: <Icon>search</Icon>,
  closeIcon: <Icon>close</Icon>
};

export default SearchForm;
