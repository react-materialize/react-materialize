var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Navbar = React.createClass({
  propTypes: {
    brand: React.PropTypes.node,
    left: React.PropTypes.bool
  },
  render() {
    var {brand, className, ...props} = this.props;
    var classes = {
      left: this.props.left
    };
    var brandClasses = {
      'brand-logo': true,
      right: this.props.left
    };
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className={cx(brandClasses)}>{brand}</a>
          <a className='button-collapse' href='#'
            data-activates='nav-mobile'>
            <i className='mdi-navigation-menu'></i>
          </a>
          <ul className={joinClasses(className, cx(classes))} id='nav-mobile'>
            {this.props.children}
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
