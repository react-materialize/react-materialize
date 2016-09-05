/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';

let wrapper = shallow(
  <Navbar brand='logo' right>
    <NavItem href='get-started.html'>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
);

describe('<Navbar />', () => {
  it('renders a navbar', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('adds a brand text', () => {
    expect(wrapper.find('a.brand-logo').text()).to.equal('logo');
  });

  it('places brand on right if navbar is left aligned', () => {
    wrapper = shallow(<Navbar brand='logo' left />);
    expect(wrapper.find('a.brand-logo.right')).to.have.length(1);
  });
});
