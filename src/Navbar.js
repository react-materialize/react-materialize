import React from 'react';
import Col from './Col';
import cx from 'classnames';

class Navbar extends React.Component {
  render() {
    var {brand, className, ...props} = this.props;
    var classes = {
      right: this.props.right
    };
    var brandClasses = {
      'brand-logo': true,
      right: this.props.left
    };
    return (
      <nav>
        <div className='nav-wrapper'>
          <Col s={12}>
            <a href='/' className={cx(brandClasses)}>{brand}</a>
            <a className='button-collapse' href='#'
              data-activates='nav-mobile'>
              <i className='mdi-navigation-menu'></i>
            </a>
            <ul className={cx(className, classes)}>
              {this.props.children}
            </ul>
          </Col>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
    brand: React.PropTypes.node,
    left: React.PropTypes.bool
}


export default Navbar;
