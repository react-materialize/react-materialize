/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Parallax from '../src/Parallax';

const wrapper = shallow(<Parallax />);

describe('<Parallax />', () => {
  it('should render a Parallax', () => {
    assert(wrapper.find('.parallax').length, 'should render a parallax');
  });
});
