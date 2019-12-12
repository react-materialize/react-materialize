import React, { Component, Fragment, Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';
import SearchForm from './SearchForm';

class Navbar extends Component {
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
      children,
      brand,
      className,
      extendWith,
      fixed,
      alignLinks,
      centerLogo,
      centerChildren,
      search,
      menuIcon,
      sidenav
    } = this.props;

    const brandClasses = cx({
      'brand-logo': true,
      center: centerLogo
    });

    const navCSS = cx({ 'nav-extended': extendWith }, className);

    const navMobileCSS = cx('hide-on-med-and-down', [alignLinks]);

    const links = Children.map(children, (link, index) => (
      <li key={index}>{link}</li>
    ));

    const sidenavLinks = sidenav
      ? sidenav
      : Children.map(children, (link, index) => {
          const clonedLink =
            link && link.props && link.props.id
              ? React.cloneElement(link, {
                  ...link.props,
                  id: `sidenav-${link.props.id}`
                })
              : link;
          return <li key={index}>{clonedLink}</li>;
        });

    let navbar = (
      <nav className={navCSS}>
        <div
          className={centerChildren ? 'nav-wrapper container' : 'nav-wrapper'}
        >
          {search ? (
            <SearchForm />
          ) : (
            <Fragment>
              {brand &&
                React.cloneElement(brand, {
                  className: cx(brand.props.className, brandClasses)
                })}
              <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
                {menuIcon}
              </a>
              <ul className={navMobileCSS}>{links}</ul>
            </Fragment>
          )}
        </div>
        {extendWith && <div className="nav-content">{extendWith}</div>}
      </nav>
    );

    if (fixed) {
      navbar = <div className="navbar-fixed">{navbar}</div>;
    }

    return (
      <Fragment>
        {navbar}

        <ul
          id="mobile-nav"
          className={cx('sidenav', [alignLinks])}
          ref={ul => {
            this._sidenav = ul;
          }}
        >
          {sidenavLinks}
        </ul>
      </Fragment>
    );
  }
}

Navbar.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  extendWith: PropTypes.node,
  search: PropTypes.bool,
  /**
   * Allows for custom sidenav node, used for mobile view
   */
  sidenav: PropTypes.node,
  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: PropTypes.oneOf(['left', 'right']),
  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: PropTypes.bool,
  /**
   * The Navbar children will be constrained in a container rather than spread out to the far edges
   */
  centerChildren: PropTypes.bool,
  /**
   * Makes the navbar fixed
   */
  fixed: PropTypes.bool,
  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: PropTypes.shape({
    // Side of screen on which Sidenav appears.
    edge: PropTypes.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: PropTypes.bool,
    // Length in ms of enter transition.
    inDuration: PropTypes.number,
    // Length in ms of exit transition.
    outDuration: PropTypes.number,
    // Function called when sidenav starts entering.
    onOpenStart: PropTypes.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: PropTypes.func,
    // Function called when sidenav starts exiting.
    onCloseStart: PropTypes.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: PropTypes.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: PropTypes.bool
  }),
  menuIcon: PropTypes.node.isRequired
};

Navbar.defaultProps = {
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  },
  menuIcon: <Icon>menu</Icon>
};

export default Navbar;
