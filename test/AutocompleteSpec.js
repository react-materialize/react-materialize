/* global describe, it, expect, context, before */

import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from '../src/Autocomplete';

const data = {
  'Apple': null,
  'Microsoft': null,
  'Google': 'http://placehold.it/250x250'
};

const wrapper = shallow(<Autocomplete title='Test Title' data={data} />);

describe('<Autocomplete />', () => {
  const typedKey = 'A';

  it('renders', () => {
    expect(wrapper.find('.autocomplete')).to.have.length(1);
  });

  context('on input change', () => {
    before(() => {
      wrapper.find('.autocomplete').simulate('change', { target: { value: typedKey } });
    });

    it('renders a dropdown', () => {
      expect(wrapper.find('.autocomplete-content')).to.have.length(1);
    });

    it('highlight\'s results', () => {
      expect(wrapper.find('.highlight').text()).to.equal(typedKey);
    });
  });

  context('on dropdown select', () => {
    const expectedValue = 'Apple';

    before(() => {
      wrapper.find('.autocomplete').simulate('change', { target: { value: typedKey } });
      wrapper.find('ul li').simulate('click');
    });

    it('updates the state with the new value', () => {
      expect(wrapper.state('value')).to.equal(expectedValue);
    });

    it('adds clicked value to input', () => {
      expect(wrapper.find('.autocomplete').prop('value')).to.equal(expectedValue);
    });
  });
});
