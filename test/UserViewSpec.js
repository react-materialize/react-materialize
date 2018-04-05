/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import UserView from '../src/UserView';

function setup(props = {}, children) {
  const propsIn = {
    ...props
  };
  const component = <UserView {...propsIn}>{children}</UserView>;
  const wrapper = shallow(component);
  const propsOut = wrapper.props();
  return {
    propsIn,
    wrapper,
    propsOut
  };
}

describe('<UserView />', () => {
  test('should render', () => {
    const { propsIn, wrapper } = setup({
      name: 'user fullname',
      email: 'user email',
      background: 'cool-background.jpg',
      image: 'cool-image.png'
    });
    assert.equal(wrapper.type(), 'div', 'should render a div');
    assert.isTrue(wrapper.hasClass('userView'), 'should have userView class');

    const background = wrapper.find('.background > img').first();
    assert.isDefined(background, 'should have a background');
    assert.equal(
      background.props().src,
      propsIn.background,
      'should set background source'
    );

    const image = wrapper.find('.circle').first();
    assert.isDefined(image, 'should have a user image');
    assert.equal(
      image.props().src,
      propsIn.image,
      'should set userImage source'
    );

    const name = wrapper.find('.name').first();
    assert.isDefined(name, 'should have a name span');
    assert.equal(name.text(), propsIn.name, 'should render the username');

    const email = wrapper.find('.email').first();
    assert.isDefined(email, 'should have an email span');
    assert.equal(
      email.text(),
      propsIn.email,
      'should render the email address'
    );
  });
});
