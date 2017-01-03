import React, { Component, PropTypes } from 'react';

class SideNavItem extends Component {

  renderUserView = (user) => {
    const { background, image, name, email } = user;
    return (
      <div className='userView'>
        { background &&
          <div className='background'>
            <img src={background} />
          </div>
        }
        { image &&
          <a href='#!user'>
            <img className='circle' src={image} />
          </a>
        }
        { name &&
          <a href='#!name'>
            <span className='white-text name'>{name}</span>
          </a>
        }
        { email &&
          <a href='#!email'>
            <span className='white-text email'>{email}</span>
          </a>
        }
      </div>
    );
  }

  render () {
    const { divider, subheader, userView, icon, href = '#!', waves, user, children, ...props } = this.props;
    const content = userView
      ? this.renderUserView(user)
      : <a className={`${subheader && 'subheader'} ${waves && 'waves-effect'}`} href={href}>
        { icon && <i className='material-icons'>{icon}</i> }
        { children }
      </a>;

    return (
      <li className={divider && 'divider'} {...props}>
        { content }
      </li>
    );
  }
}

SideNavItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  subheader: PropTypes.bool,
  userView: PropTypes.bool,
  waves: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  user: PropTypes.shape({
    background: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string
  })
};

export default SideNavItem;
