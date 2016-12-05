/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';

const wrapper = shallow(
  <Tabs>
    <Tab title='one'>One</Tab>
    <Tab title='Two'>Two</Tab>
  </Tabs>
);

describe('Tabs', () => {
  it('should create list of Tab itemt', () => {
    assert(wrapper.find('ul.tabs'));
  });
});
