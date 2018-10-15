import React from 'react';
import Icon from './Icon';

const SearchForm = () => (
  <form>
    <div className="input-field">
      <input id="search" type="search" required />
      <label className="label-icon" htmlFor="search">
        <Icon>search</Icon>
      </label>
      <Icon>close</Icon>
    </div>
  </form>
);

export default SearchForm;
