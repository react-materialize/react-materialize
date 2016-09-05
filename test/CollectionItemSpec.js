/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from '../src/CollectionItem';

describe('<CollectionItem />', () => {
  let wrapper = shallow(<CollectionItem>Alvin</CollectionItem>);
  it('can render as a link', () => {
    wrapper = shallow(<CollectionItem href='#'>Alvin</CollectionItem>);
    expect(wrapper.props().href).to.equal('#');
    expect(wrapper.type()).to.equal('a');
  });

  it('can render as a list item', () => {
    wrapper = shallow(<CollectionItem>Alvin</CollectionItem>);
    expect(wrapper.type()).to.equal('li');
  });

  it('should render children when passed in', () => {
    let child = <p>child</p>;
    wrapper = shallow(<CollectionItem>{child}</CollectionItem>);
    expect(wrapper.contains(child)).to.equal(true);
  });

  it('can have an active state', () => {
    wrapper = shallow(<CollectionItem active>Alvin</CollectionItem>);
    expect(wrapper.find('.collection-item.active')).to.have.length(1);
  });
});
