import React from 'react';
import cx from 'classnames';
import Icon from '../../../src/Icon';

const capitalize = path => path[0].toUpperCase() + path.substr(1);

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {results: [], focused: false};
    this.search = this.search.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus () {
    this.setState({focused: true});
  }

  handleBlur () {
    this.setState({focused: false});
  }

  search () {
    const keys = []; // TODO fill
    let input = new RegExp(this.refs.search.value, 'i');
    let results = [];
    if (input !== '') {
      keys.forEach(key => {
        if (input.test(key)) results.push(key);
      });
      this.setState({results: results});
    }
  }

  render () {
    let classes = {
      'search-wrapper': true,
      card: true
    };
    classes.focused = this.state.focused;
    return (
      <li className='search'>
        <div className={cx(classes)}>
          <input id='search'
            ref='search'
            onChange={this.search}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur} />
          <Icon>search</Icon>
          <div className='search-results'>
            {this.state.results.map(path => {
              return <a href={`/${path}`} key={path}>{capitalize(path)}</a>;
            })}
          </div>
        </div>
      </li>
    );
  }
}

export default Search;
