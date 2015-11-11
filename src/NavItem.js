import React from 'react';

class NavItem extends React.Component {
  render() {
    let {divider, href, children, ...props} = this.props;
    if (divider) {
      return <li className="divider"></li>
    } else {
      return (
        <li {...props}>
          <a href={href}>{children}</a>
        </li>
      );
    }
  }
}

NavItem.propTypes = {
  href: React.PropTypes.string,
  divider: React.PropTypes.bool,
}

export default NavItem;
