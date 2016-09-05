/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../src/Tag';

const child = 'hey';
const wrapper = shallow(
  <Tag>{child}</Tag>
);

describe('Tabs', () => {
  it('should create list of Tab itemt', () => {
    expect(wrapper.contains(child)).to.equal(true);
  });
});
