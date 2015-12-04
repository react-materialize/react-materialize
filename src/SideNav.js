import React from 'react';

import Icon from './Icon';
import idgen from './idgen';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = `sidenav_${idgen()}`;
    return (
      <nav>
        <ul className="right hide-on-med-and-down">
          {this.props.children}
        </ul>
        <ul id={id} className="side-nav">
          {this.props.children}
        </ul>
        <a href="#" data-activates={id} className="button-collapse"><Icon>view_headline</Icon></a>
      </nav>
    );
  }
}

SideNav.propTypes = {
  /**
   * side navigation bar placement
   */
  right: React.PropTypes.bool,
  left: React.PropTypes.bool,
};

export default SideNav;
