/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../src/NavItem';

describe.only('<NavItem />', () => {
  let wrapper;

  it('renders', () => {
    wrapper = shallow(
      <NavItem href='get-started.html'>Getting</NavItem>
    );

    expect(wrapper.type()).to.eq('li');
    expect(wrapper.children().first().type()).to.eq('a');
  });

  it('passes className to first node', () => {
    wrapper = shallow(
      <NavItem className='red' href='get-started.html'>Getting</NavItem>
    );

    expect(wrapper.find('li.red').length).to.eq(1);
  });

  it('passes node as a child', () => {
    const child = <p>Go Home</p>;
    wrapper = shallow(
      <NavItem href='get-started.html'>{child}</NavItem>
    );

    expect(wrapper.children().at(0).type()).to.eq('a');
    expect(wrapper.children().at(0).children().at(0).type()).to.eq('p');
  });

  it('can be a divider', () => {
    wrapper = shallow(<NavItem divider />);

    expect(wrapper.find('li.divider').length).to.eq(1);
  });

  it('handles multiple childs', () => {
    wrapper = shallow(
      <NavItem href='get-started.html'>
        <span>hello</span>
        <h2>World</h2>
      </NavItem>
    );

    expect(wrapper.find('span').length).to.eq(1);
    expect(wrapper.find('h2').length).to.eq(1);
  });
});
