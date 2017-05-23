/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Divider from '../src/Divider';

let wrapper;

describe('<Divider />', () => {
  it('renders', () => {
    wrapper = shallow(<Divider />);
    assert(wrapper.find('.divider'));
  });

  it('does not contain children', () => {
    wrapper = shallow(<Divider><p>nope</p></Divider>);
    assert.equal(wrapper.find('.divider').children().length, 0);
  });
});
