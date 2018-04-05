/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Section from '../src/Section';

let wrapper;

describe('<Section />', () => {
  test('renders', () => {
    wrapper = shallow(<Section />);
    assert(wrapper.find('.section').length);
  });

  test('renders children', () => {
    wrapper = shallow(
      <Section>
        <p>nope</p>
      </Section>
    );
    assert.equal(
      wrapper
        .find('.section')
        .children()
        .type(),
      'p'
    );
  });
});
