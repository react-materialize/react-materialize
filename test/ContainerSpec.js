/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Container from '../src/Container';

let wrapper;

describe('<Container />', () => {
  it('renders', () => {
    wrapper = shallow(<Container />);
    assert(wrapper.find('.container').length);
  });

  it('renders children', () => {
    wrapper = shallow(
      <Container>
        <p>yes</p>
      </Container>
    );
    assert.equal(
      wrapper
        .find('.container')
        .children()
        .type(),
      'p'
    );
  });
});
