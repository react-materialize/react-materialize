import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../../src/Icon';

const capitalize = path => path[0].toUpperCase() + path.substr(1);
const MIN_INPUT_LENGTH = 2;

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {results: [], focused: false};
    this.search = this.search.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.parseRoutes = this.parseRoutes.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.routes = this.parseRoutes();
  }

  handleFocus () {
    this.setState({ focused: true });
  }

  handleBlur () {
    this.setState({ focused: false });
  }

  handleClicked () {
    this.closeSideNav();
    this.setState({results: []});
    const { search } = this.refs;
    search.value = '';
  }

  closeSideNav () {
    $('.button-collapse').sideNav('hide');
  }

  search () {
    const keys = this.routes;
    const { search } = this.refs;
    if (search.value.length < MIN_INPUT_LENGTH) return;
    let input = new RegExp(search.value, 'i');
    let results = [];
    if (input !== '') {
      keys.forEach(key => {
        if (input.test(key.path)) {
          results.push(key);
        }
      });
      this.setState({ results });
    }
  }

  parseRoutes () {
    const { routes } = this.props;

    let ret = [];
    routes
      .filter(b => b.routes)
      .map(a => a.routes)
      .map((c) => {
        c.map((d) => {
          ret.push({
            path: d.path.substr(1),
            component: d.component
          });
        });
      });

    return ret;
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
            {this.state.results.map(({ path, component }) => {
              return <Link to={`/${path}`} onClick={this.handleClicked} key={path}>{capitalize(path)}</Link>;
            })}
          </div>
        </div>
      </li>
    );
  }
}

Search.propTypes = {
  routes: PropTypes.array
};

export default Search;
