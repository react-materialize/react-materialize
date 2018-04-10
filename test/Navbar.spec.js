import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';
import mocker from './helper/mocker';

describe('<Navbar />', () => {
  let wrapper;
  const sideNavMock = jest.fn();
  const restore = mocker('sideNav', sideNavMock);

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(
      <Navbar brand="Logo" right>
        <NavItem href="get-started.html">Getting started</NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('nav')).toHaveLength(1);
  });

  test('places brand on right if navbar is left aligned', () => {
    wrapper = shallow(<Navbar brand="logo" left />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a.brand-logo.right')).toHaveLength(1);
  });

  test('adds a brand node', () => {
    const brandNode = <span className="brando">I AM BRAND</span>;

    wrapper = mount(<Navbar brand={brandNode} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a.brand-logo').contains(brandNode)).toBeTruthy();
  });

  test('can be fixed', () => {
    wrapper = shallow(<Navbar fixed />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('navbar-fixed')).toBeTruthy();
  });
});
