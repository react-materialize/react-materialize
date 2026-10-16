import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextInput from './TextInput';

const defaultSearchIcon = <Icon>search</Icon>;
const defaultCloseIcon = <Icon>close</Icon>;

const SearchForm = ({
  searchIcon = defaultSearchIcon,
  closeIcon = defaultCloseIcon
}) => (
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

export default SearchForm;
