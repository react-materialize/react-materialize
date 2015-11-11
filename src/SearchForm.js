import React from 'react';
import Icon from './Icon';

class SearchForm extends React.Component {
  render() {
    return (
        <form>
            <div class="input-field">
                <input id="search" type="search" required></input>
                <label for="search"><Icon>search</Icon></label>
                <Icon>close</Icon>
            </div>
        </form>
    );
  }
}

export default SearchForm;
