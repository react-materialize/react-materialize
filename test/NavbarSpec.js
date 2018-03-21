/* global describe, it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';

describe('<Navbar />', () => {
  let wrapper;

  it('renders a navbar', () => {
    wrapper = shallow(
      <Navbar brand='Logo' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    );

    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('places brand on right if navbar is left aligned', () => {
    wrapper = shallow(<Navbar brand='logo' left />);
    expect(wrapper.find('a.brand-logo.right')).to.have.length(1);
  });

  it('adds a brand node', () => {
    const brandNode = <span className='brando'>I AM BRAND</span>;

    wrapper = mount(<Navbar brand={brandNode} />);
    expect(wrapper.find('a.brand-logo')
      .contains(brandNode)).to.equal(true);
  });

  it('can be fixed', () => {
    wrapper = shallow(<Navbar fixed />);
    expect(wrapper.hasClass('navbar-fixed')).to.eq(true);
  });

  it('can have container', () => {
    wrapper = mount(<Navbar container />);
    expect(wrapper.props().container).to.eq(true);
 });
});
