/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';

let wrapper = shallow(
  <Dropdown trigger={<Button>Drop me!</Button>} />
);

describe('<Collection />', () => {
  it('renders a dropdown', () => {
    expect(wrapper.find('.dropdown-content')).to.have.length(1);
  });
});
