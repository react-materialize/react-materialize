/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import SideNav from '../src/SideNav';
import Button from '../src/Button';

function setup (props = {}, mounted) {
  const propsIn = {
    trigger: <Button>Show sidenav</Button>,
    ...props
  };
  const wrapper = shallow(<SideNav {...propsIn} />);
  const propsOut = wrapper.props();
  return {
    propsIn,
    wrapper,
    propsOut
  };
}

describe('<SideNav />', () => {
  it('should render', () => {
    const { wrapper } = setup();
    assert(wrapper.find('.side-nav').length, 'should render a sidenav');
  });
});
