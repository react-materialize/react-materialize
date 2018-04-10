/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/Card';

const wrapper = shallow(
  <Card
    title="card title"
    className="blue-grey darken-1"
    textClassName="white-text"
  >
    I am a very simple card
  </Card>
);

describe('<Card />', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have classname card', () => {
    expect(wrapper.find('.card')).toHaveLength(1);
  });

  test('should append classnames to container', () => {
    expect(wrapper.find('.blue-grey')).toHaveLength(1);
    expect(wrapper.find('.darken-1')).toHaveLength(1);
  });

  test('should append text classnames to content', () => {
    expect(wrapper.find('.card-content').hasClass('white-text')).toEqual(true);
  });
});
