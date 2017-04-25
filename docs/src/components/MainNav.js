import React from 'react';
import { NavLink } from 'react-router-dom';
import Collapsible from '../../../src/Collapsible'; // TODO fix paths
import CollapsibleItem from '../../../src/CollapsibleItem';
import Search from './Search';

import { routesConfig as routes } from '../routes';

const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';
const renderPageTitle = () => {
  const title = window.location.pathname.substring(1);
  return title.length ? capitalize(title) : 'Getting Started'; // fix
};

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
                { renderPageTitle() }
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
            <NavLink className='waves-effect waves-teal' to='/'>Getting started</NavLink>
          </li>
          <li className='no-padding' >
            <Collapsible>
              {routes.map((routesSection, idx) => (
                <CollapsibleItem key={`route${idx}`} header={routesSection.path}>
                  <ul>
                    {routesSection.routes.map((r) => (
                      <li key={r.path}>
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
