import React from 'react';
import $ from 'jquery';
import NavItem from './NavItem';

require('imports?jQuery=jquery!materialize-css/bin/materialize.js');

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <nav>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <ul id="slide-out" className="side-nav">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </nav>
    );
  }
}
