/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Slider from '../src/Slider';

const wrapper = shallow(<Slider />);

describe('<Slider />', () => {
  it('should render a Slider', () => {
    assert(wrapper.find('.slider').length, 'should render a slider');
  });
});
