/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
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
    expect(wrapper.find('.tabs').length).to.eql(1);
    expect(wrapper.find('.tabs .tab.col').length).to.eql(2);
  });

  it('renders a `Col` per `Tab`', () => {
    const tabs = wrapper.find('.tab a');
    tabs.forEach((tab) => {
      const id = tab.prop('href');
      expect(wrapper.find(id).length).to.eql(1);
    });
  });
});
