import React from 'react';
import { NavLink } from 'react-router-dom';

import Collapsible from 'Collapsible';
import CollapsibleItem from 'CollapsibleItem';
import Search from './Search';
import routes from '../routes';

const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';
const renderPageTitle = () => {
  const title = window.location.pathname.substring(1);
  return title.length ? capitalize(title) : 'Getting Started'; // TODO fix
};

class Navigation extends React.Component {
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
    return (
      <header>
        {renderNav()}
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            yo
            <i className='mdi-navigation-menu' />
          </a>
        </div>
        <ul id='nav-mobile' className='side-nav fixed'>
          <li className='logo'>
            <NavLink to='/' className='brand-logo' title='React Materialize' id='logo-container'>
              <img src='img/react-materialize-logo.svg' alt='React Materialize' />
            </NavLink>
          </li>
          <Search />
          <li className='no-padding' >
            <Collapsible>
              {routes.map(renderNavItems)}
            </Collapsible>
          </li>
        </ul>
      </header>
    );
  }
}

const renderNav = () => (
  <nav className='top-nav'>
    <div className='container' >
      <div className='nav-wrapper'>
        <a className='page-title'>
          { renderPageTitle() }
        </a>
      </div>
    </div>
  </nav>
);

const renderNavItems = (navItem, idx) => (
  navItem.component
    ? <li key={`route${idx}`}>
      <NavLink className='waves-effect waves-teal' to='/'>Getting started</NavLink>
    </li>
    : <CollapsibleItem key={`route${idx}`} header={navItem.path}>
      <ul>{navItem.routes.map(renderSubNavItems)}</ul>
    </CollapsibleItem>
);

/* eslint-disable react/prop-types */
const renderSubNavItems = ({ path }) => (
  <li key={path}>
    <NavLink to={path} className='waves-effect waves-teal'>
      {capitalize(path)}
    </NavLink>
  </li>
);
/* eslint-enable */

export default Navigation;
