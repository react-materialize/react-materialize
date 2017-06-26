import React from 'react';
import { NavLink } from 'react-router-dom';

import Collapsible from 'Collapsible';
import CollapsibleItem from 'CollapsibleItem';
import Search from './Search';
import routes from '../routes';

const isMobile = () => ($(window).width() < 993);
const getPageTitle = () => window.location.hash.substring(2) || 'react materialize';
const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';

class Navigation extends React.Component {
  constructor (props) {
    super(props);
    this.state = { title: '' };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    $('.button-collapse').sideNav({
      closeOnClick: isMobile,
      edge: 'left'
    });
  }

  onChange (title) {
    this.setState({ title });
  }

  render () {
    return (
      <header>
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            <i className='material-icons'>menu</i>
          </a>
        </div>
        <ul id='nav-mobile' className='side-nav fixed'>
          <li className='logo'>
            <NavLink to='/' className='brand-logo' title='React Materialize' id='logo-container'>
              <img src='img/react-materialize-logo.svg' alt='React Materialize' />
            </NavLink>
          </li>
          <Search routes={routes} />
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

const getActiveRoute = ({routes = []}) => {
  const pageTitle = getPageTitle();
  return routes.length &&
    routes.filter(r => r.path.substr(1) === pageTitle);
};

const renderNavItems = (navItem, idx) => {
  const expanded = !!getActiveRoute(navItem).length;

  return (
    navItem.component
      ? <li key={`route${idx}`}>
        <NavLink className='waves-effect waves-teal' to='/'>Getting started</NavLink>
      </li>
      : <CollapsibleItem expanded={expanded} key={`route${idx}`} header={navItem.path}>
        <ul>{navItem.routes.map(renderSubNavItems)}</ul>
      </CollapsibleItem>
  );
};

/* eslint-disable react/prop-types */
const renderSubNavItems = ({ path }) => (
  <li key={path}>
    <NavLink to={path} className='waves-effect waves-teal'>
      {capitalize(path.substr(1))}
    </NavLink>
  </li>
);
/* eslint-enable */

export default Navigation;
