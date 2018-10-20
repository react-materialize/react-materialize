import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

import constants from './constants';
class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { options } = this.props;

    if (typeof M !== 'undefined') {
      this.instance = M.Sidenav.init(this._sidenav, options);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const {
      brand,
      className,
      extendWith,
      fixed,
      alignLinks,
      centerLogo,
      href,
      children,
      ...other
    } = this.props;

    delete other.options;

    const brandClasses = cx({
      'brand-logo': true,
      center: centerLogo,
      left: alignLinks === 'right'
    });

    const classes = cx({ 'nav-extended': extendWith }, className);

    const navMobileCSS = cx('hide-on-med-and-down', [alignLinks]);

    const links = React.Children.map((link, index) => (
      <li key={index}>{link}</li>
    ));

    let navbar = (
      <nav {...other} className={classes}>
        <div className="nav-wrapper">
          {brand && (
            <a href={href} className={brandClasses}>
              {brand}
            </a>
          )}
          <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
            <Icon>menu</Icon>
          </a>
          <ul className={navMobileCSS}>{links}</ul>
        </div>
        {extendWith && (
          <div className="nav-content">
            {extendWith.map((elem, index) => <div key={index}>{elem}</div>)}
          </div>
        )}
      </nav>
    );

    if (fixed) {
      navbar = <div className="navbar-fixed">{navbar}</div>;
    }

    return (
      <React.Fragment>
        {navbar}

        <ul
          id={constants.MOBILE_NAV_ID}
          className="sidenav"
          ref={ul => {
            this._sidenav = ul;
          }}
        >
          {links}
        </ul>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  extendWith: PropTypes.arrayOf(PropTypes.node),
  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: PropTypes.oneOf(['left', 'right']),
  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: PropTypes.bool,
  href: PropTypes.string,
  /**
   * Makes the navbar fixed
   */
  fixed: PropTypes.bool,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: PropTypes.shape({
    menuWidth: PropTypes.number,
    edge: PropTypes.oneOf(['left', 'right']),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool
  })
};

Navbar.defaultProps = {
  href: '/',
  options: {}
};

export default Navbar;
