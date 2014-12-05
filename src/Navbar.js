var React = require('react');

var Navbar = React.createClass({
  propTypes: {
    brand: React.PropTypes.node
  },
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>{this.props.brand}</a>
          <ul className='right side-nav' id='nav-mobile'>
            {this.props.children}
          </ul>
          <a className='button-collapse' href='#'
            data-activates='nav-mobile'>
            <i className='mdi-navigation-menu'></i>
          </a>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
