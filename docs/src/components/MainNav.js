import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import Icon from '../../../src/Icon';
import Collapsible from '../../../src/Collapsible'; // TODO fix paths
import CollapsibleItem from '../../../src/CollapsibleItem';

import { routesConfig as routes } from '../routes';

let cssComponents = {
  grid: 'Grid',
  table: 'Table'
};

let jsComponents = {
  collapsible: 'Collapsible',
  dropdown: 'Dropdown',
  media: 'Media',
  modals: 'Modals',
  sidenav: 'SideNav',
  tabs: 'Tabs'
};

let components = {
  badges: 'Badges',
  buttons: 'Buttons',
  breadcrumbs: 'Breadcrumbs',
  cards: 'Cards',
  chips: 'Chips',
  collections: 'Collections',
  footer: 'Footer',
  forms: 'Forms',
  navbar: 'Navbar',
  pagination: 'Pagination',
  preloader: 'Preloader'
};

let keys = Object.keys(jsComponents)
  .concat(Object.keys(cssComponents))
  .concat(Object.keys(components));

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

class MainNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {title: ''};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    $('.button-collapse').sideNav({edge: 'left'});
  }

  onChange (component) {
    this.setState({
      title: component
    });
  }

  render () {
    let { location } = this.props;
    location = location.substr(1).replace(/\.html/, '');

    return (
      <header>
        <nav className='top-nav'>
          <div className='container' >
            <div className='nav-wrapper'>
              <a className='page-title'>
                { capitalize(window.location.pathname.substring(1)) }
              </a>
            </div>
          </div>
        </nav>
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            <i className='mdi-navigation-menu' />
          </a>
        </div>
        <ul id='nav-mobile' className='side-nav fixed'>
          <li className='logo'>
            <a className='brand-logo' title='React Materialize' id='logo-container' href='https://react-materialize.github.io' >
              <img src='img/react-materialize-logo.svg' alt='React Materialize' />
            </a>
          </li>
          <Search />
          <li className='bold'>
            <NavLink className='waves-effect waves-teal' to='getting-started'>
              Getting started
            </NavLink>
          </li>
          <li className='no-padding' >
            <Collapsible>
              {routes.map((routesSection) => (
                <CollapsibleItem header={routesSection.path}>
                  <ul>
                    {routesSection.routes.map((r) => (
                      <li>
                        <NavLink to={r.path} className='waves-effect waves-teal'>
                          {r.path}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </CollapsibleItem>
              ))}
            </Collapsible>
          </li>
        </ul>
      </header>
    );
  }
}

export default MainNav;
