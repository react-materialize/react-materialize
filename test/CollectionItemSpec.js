/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from '../src/CollectionItem';

describe('<CollectionItem />', () => {
  let wrapper = shallow(<CollectionItem>Alvin</CollectionItem>);
  test('can render as a link', () => {
    wrapper = shallow(<CollectionItem href="#">Alvin</CollectionItem>);
    expect(wrapper.props().href).toBe('#');
    expect(wrapper.type()).toBe('a');
  });

  test('can render as a list item', () => {
    wrapper = shallow(<CollectionItem>Alvin</CollectionItem>);
    expect(wrapper.type()).toBe('li');
  });

  test('should render children when passed in', () => {
    let child = <p>child</p>;
    wrapper = shallow(<CollectionItem>{child}</CollectionItem>);
    expect(wrapper.contains(child)).toBe(true);
  });

  test('can have an active state', () => {
    wrapper = shallow(<CollectionItem active>Alvin</CollectionItem>);
    expect(wrapper.find('.collection-item.active')).toHaveLength(1);
  });
});
