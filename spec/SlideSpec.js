/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Slide from '../src/Slide';

const wrapper = shallow(
  <Slide src='#' />
);

describe('<Slide />', () => {
  it('should render a Slide', () => {
    assert(wrapper.childAt(0).is('img'), 'should be an image tag');
    assert(wrapper.childAt(0).is({src: '#'}), 'should have a src prop');
  });
});
