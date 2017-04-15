import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Col from './Col';
import Icon from './Icon';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.renderSideNav = this.renderSideNav.bind(this);
  }

  componentDidMount () {
    if (typeof $ !== 'undefined') {
      $('.button-collapse').sideNav();
    }
  }

  renderSideNav () {
    return (
      <ul id='nav-mobile' className='side-nav'>
        {this.props.children}
      </ul>
    );
  }

  render () {
    const {
      brand,
      className,
      left,
      right,
      href,
      ...other
    } = this.props;

    let classes = {
      right: right,
      'hide-on-med-and-down': true
    };

    let brandClasses = {
      'brand-logo': true,
      right: left
    };

    return (
      <nav {...other} className={className}>
        <div className='nav-wrapper'>
          <Col s={12}>
            <a href={href} className={cx(brandClasses)}>{brand}</a>
            <ul className={cx(className, classes)}>
              {this.props.children}
            </ul>
            {this.renderSideNav()}
            <a className='button-collapse' href='#' data-activates='nav-mobile'>
              <Icon>view_headline</Icon>
            </a>
          </Col>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  href: PropTypes.string
};

Navbar.defaultProps = {
  href: '/'
};

export default Navbar;
