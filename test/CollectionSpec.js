/* global describe, it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';

let wrapper = shallow(
  <Collection>
    <CollectionItem>Alvin</CollectionItem>
  </Collection>
);

describe('<Collection />', () => {
  test('renders a list', () => {
    expect(wrapper.find('ul.collection')).toHaveLength(1);
  });

  describe('with header prop', () => {
    let header = 'names';
    wrapper = shallow(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    test('should support "header" prop', () => {
      expect(wrapper.find('.with-header')).toHaveLength(1);
    });

    test('should render a header text', () => {
      expect(wrapper.find('h4').text()).toBe(header);
    });

    test('should render a header component', () => {
      header = <h2>ages</h2>;
      wrapper = shallow(
        <Collection header={header}>
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      );
      expect(wrapper.find('h2').text()).toBe('ages');
    });

    test('should render anchors if present', () => {
      wrapper = mount(
        <Collection>
          <CollectionItem href="#">Alvin</CollectionItem>
          <CollectionItem href="#" className="active">
            Alvin
          </CollectionItem>
          <CollectionItem href="#">Alvin</CollectionItem>
          <CollectionItem href="#">Alvin</CollectionItem>
        </Collection>
      );
      expect(
        wrapper
          .find('.collection-item')
          .first()
          .type()
      ).toBe('a');
    });
  });
});
