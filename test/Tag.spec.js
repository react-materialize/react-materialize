/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../src/Tag';

const child = 'hey';
const wrapper = shallow(<Tag>{child}</Tag>);

describe('Tabs', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should create list of Tab itemt', () => {
    expect(wrapper.contains(child)).toEqual(true);
  });
});
