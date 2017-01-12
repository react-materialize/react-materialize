/* global describe, it, expect */

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
  it('should render', () => {
    expect(wrapper.find('.autocomplete')).to.have.length(1);
  });

  it('should render dropdown', () => {
    wrapper.find('.autocomplete').simulate('change', { target: { value: 'A' } });
    expect(wrapper.find('.highlight').text()).to.equal('A');
  });

  it('should fulfill autocomplete when dropdown clicked', () => {
    wrapper.find('.autocomplete').simulate('change', { target: { value: 'A' } });
    wrapper.find('ul li').simulate('click');
    expect(wrapper.state('value')).to.equal('Apple');
  });
});
