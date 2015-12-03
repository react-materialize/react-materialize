import React from 'react';
import store from './store';
import Icon from '../../src/Icon';
import Collapsible from '../../src/Collapsible';
import CollapsibleItem from '../../src/CollapsibleItem';

const MainNav = React.createClass({
  getInitialState() {
    return {
      title: 'Components'
    };
  },

  componentDidMount() {
    store.on('component', this.onChange);
  },

  componentWillUnmount() {
    store.removeListener('component', this.onChange);
  },

  onChange(component) {
    this.setState({
      title: component
    });
  },

  render() {
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
        <ul id='nav-mobile' className='side-nav fixed' style={{ left: '0px' }}>
          <li className='logo'>
            <a className='brand-logo' id='logo-container' href="https://react-materialize.github.io" >RM</a>
          </li>
          <li className='search'>
            <div className="search-wrapper card">
              <input id="search" ></input>
              <Icon>search</Icon>
            </div>
            <div className="search-results"></div>
          </li>
          <li className="bold">
            <a className="waves-effect waves-teal" href="getting-started.html">
              Getting started
            </a>
          </li>
          <li className="no-padding" >
            <Collapsible accordion>
              <CollapsibleItem header="CSS" className="bold">
                <ul>
                  <li> <a href='grid.html'> Grid </a></li>
                  <li> <a href='table.html'> Table </a></li>
                </ul>
              </CollapsibleItem>
            </Collapsible>
          </li>

          <li className="no-padding" >
            <Collapsible accordion>
              <CollapsibleItem header="Components" className="bold">
                <ul>
                  <li> <a href="badges.html"> Badges </a> </li>
                  <li> <a href="buttons.html" > Buttons </a> </li>
                  <li> <a href="breadcrumbs.html"> Breadcrumbs </a> </li>
                  <li> <a href="cards.html"> Cards </a> </li>
                  <li> <a href="chips.html"> Chips </a> </li>
                  <li> <a href="collections.html"> Collections </a> </li>
                  <li> <a href="footer.html"> Footer </a> </li>
                  <li> <a href="forms.html"> Forms </a> </li>
                  <li> <a href="navbar.html"> Navbar </a> </li>
                </ul>
              </CollapsibleItem>
            </Collapsible>
          </li>
        </ul>
      </header>
    );
  }
});

module.exports = MainNav;
