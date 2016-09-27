/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Col from '../src/Col';

let wrapper = shallow(
  <Col />
);

describe('<Col />', () => {
  it('should render', () => {
    assert.ok(wrapper.find('.col'), 'a column');
  });

  it('accepts sizes as props', () => {
    wrapper = shallow(
      <Col s={4} m={6} l={8} />
    );
    assert(wrapper.find('.col').hasClass('s4 m6 l8'), 'a column');
  });
});
