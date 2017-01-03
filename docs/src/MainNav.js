import React from 'react';
import cx from 'classnames';
import store from './store';
import Icon from '../../src/Icon';
import Collapsible from '../../src/Collapsible';
import CollapsibleItem from '../../src/CollapsibleItem';

let cssComponents = {
  grid: 'Grid',
  table: 'Table',
};

let jsComponents = {
  collapsible: 'Collapsible',
  dropdown: 'Dropdown',
  media: 'Media',
  modals: 'Modals',
  sidenav: 'SideNav',
  tabs: 'Tabs',
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
  preloader: 'Preloader',
};

let keys = Object.keys(jsComponents)
  .concat(Object.keys(cssComponents))
  .concat(Object.keys(components));

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: [], focused: false};
    this.search = this.search.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({focused: true});
  }

  handleBlur() {
    this.setState({focused: false});
  }

  search() {
    let input = new RegExp(this.refs.search.value, 'i');
    let results = [];
    if (input !== '') {
      keys.forEach(key => {
        if (input.test(key)) results.push(key);
      });
      this.setState({results: results});
    }
  }

  capitalize(path) {
    return path[0].toUpperCase() + path.substr(1);
  }

  render() {
    let classes = {
      'search-wrapper': true,
      card: true,
    };
    classes.focused = this.state.focused;
    return (
      <li className='search'>
        <div className={cx(classes)}>
          <input id='search'
           ref='search'
           onChange={this.search}
           onFocus={this.handleFocus}
           onBlur={this.handleBlur}></input>
          <Icon>search</Icon>
          <div className="search-results">
            {this.state.results.map(key => {
              let path = `/${key}.html`;
              return <a href={path} key={path}>{this.capitalize(key)}</a>;
            })}
          </div>
        </div>
      </li>
    );
  }
}

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    store.on('component', this.onChange);
    $(".button-collapse").sideNav({edge: 'left'});
  }

  componentWillUnmount() {
    store.removeListener('component', this.onChange);
  }

  onChange(component) {
    this.setState({
      title: component
    });
  }

  render() {
    let {location} = this.props;
    location = location.substr(1).replace(/\.html/, '');
    return (
      <header>
        <nav className="top-nav">
          <div className="container" >
            <div className="nav-wrapper">
              <a className="page-title">
                { this.state.title }
              </a>
            </div>
          </div>
        </nav>
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            <i className='mdi-navigation-menu'/>
          </a>
        </div>
        <ul id='nav-mobile' className='side-nav fixed'>
          <li className='logo'>
            <a className='brand-logo' title='React Materialize' id='logo-container' href="https://react-materialize.github.io" >
            <img src="assets/react-materialize-logo.svg" alt="React Materialize"/>
            </a>
          </li>
          <Search />
          <li className="bold">
            <a className="waves-effect waves-teal" href="getting-started.html">
              Getting started
            </a>
          </li>
          <li className="no-padding" >
            <Collapsible>
              <CollapsibleItem header="CSS" expanded={!!~Object.keys(cssComponents).indexOf(location)} className="bold">
                <ul>
                  {Object.keys(cssComponents).map(path => {
                    let href = path + '.html';
                    let hrefClasses = {
                      active: location === path,
                    };
                    return (
                      <li key={path} className={cx(hrefClasses)}>
                        <a href={href}>{cssComponents[path]}</a>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleItem>
              <CollapsibleItem header="Components" expanded={!!~Object.keys(components).indexOf(location)} className="bold">
                <ul>
                  {Object.keys(components).map( path => {
                    let href = path + '.html';
                    let hrefClasses = {
                      active: location === path,
                    };
                    return (
                      <li key={path} className={cx(hrefClasses)}>
                        <a href={href}>
                          {components[path]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleItem>
              <CollapsibleItem header="JavaScript" expanded={!!~Object.keys(jsComponents).indexOf(location)} className="bold">
                <ul>
                  {Object.keys(jsComponents).map( path => {
                    let href = path + '.html';
                    let hrefClasses = {
                      active: location === path,
                    };
                    return (
                      <li key={path} className={cx(hrefClasses)}>
                        <a href={href}>{jsComponents[path]}</a>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleItem>
            </Collapsible>
          </li>
        </ul>
      </header>
    );
  }
}

export default MainNav;
