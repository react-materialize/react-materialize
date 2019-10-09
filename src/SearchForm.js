import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextInput from './TextInput';

const SearchForm = ({ searchIcon, closeIcon, onChange }) => (
  <form>
    <TextInput
      label={searchIcon}
      type="search"
      onChange={e => (typeof onChange == 'function' ? onChange(e) : false)}
    >
      {closeIcon}
    </TextInput>
  </form>
);

SearchForm.propTypes = {
  searchIcon: PropTypes.node.isRequired,
  closeIcon: PropTypes.node.isRequired,
  onChange: PropTypes.func
};

SearchForm.defaultProps = {
  searchIcon: <Icon>search</Icon>,
  closeIcon: <Icon>close</Icon>,
  onChange: null
};

export default SearchForm;
