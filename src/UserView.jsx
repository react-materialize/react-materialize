import React from 'react';
import PropTypes from 'prop-types';

export const UserShape = {
  background: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string
};

const UserView = ({ background, image, name, email }) => (
  <div className="user-view">
    {background && (
      <div className="background">
        <img src={background} />
      </div>
    )}
    {image && (
      <a href="#!user">
        <img className="circle" src={image} />
      </a>
    )}
    {name && (
      <a href="#!name">
        <span className="white-text name">{name}</span>
      </a>
    )}
    {email && (
      <a href="#!email">
        <span className="white-text email">{email}</span>
      </a>
    )}
  </div>
);

UserView.propTypes = UserShape;

export default UserView;
