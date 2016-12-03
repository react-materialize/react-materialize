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
  it('renders a list', () => {
    expect(wrapper.find('ul.collection')).to.have.length(1);
  });

  describe('with header prop', () => {
    let header = 'names';
    wrapper = shallow(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    it('should support "header" prop', () => {
      expect(wrapper.find('.with-header')).to.have.length(1);
    });

    it('should render a header text', () => {
      expect(wrapper.find('h4').text()).to.equal(header);
    });

    it('should render a header component', () => {
      header = <h2>ages</h2>;
      wrapper = shallow(
        <Collection header={header}>
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      );
      expect(wrapper.find('h2').text()).to.equal('ages');
    });

    it('should render anchors if present', () => {
      wrapper = mount(
        <Collection>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#' className='active'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
        </Collection>
      );
      expect(wrapper.find('.collection-item').first().type()).to.equal('a');
    });
  });
});
