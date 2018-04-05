/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../src/Tag';

const child = 'hey';
const wrapper = shallow(<Tag>{child}</Tag>);

describe('Tabs', () => {
  test('should create list of Tab itemt', () => {
    expect(wrapper.contains(child)).toBe(true);
  });
});
