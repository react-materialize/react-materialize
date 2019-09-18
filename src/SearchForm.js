import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextInput from './TextInput';

const SearchForm = ({ searchIcon, closeIcon, onChange, value }) => (
  <form>
    <TextInput
      label={searchIcon}
      type="search"
      onChange={e => (typeof (onChange) == 'function' ? onChange(e) : false)}
      value={value}
    >
      {closeIcon}
    </TextInput>
  </form>
);

SearchForm.propTypes = {
  searchIcon: PropTypes.node.isRequired,
  closeIcon: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
};

SearchForm.defaultProps = {
  searchIcon: <Icon>search</Icon>,
  closeIcon: <Icon>close</Icon>,
  onChange: null,
  value: ''
};

export default SearchForm;
