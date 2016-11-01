/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';

let wrapper = shallow(
  <Dropdown trigger={<Button>Drop me!</Button>} className="more" />
);

describe('<Dropdown />', () => {
  it('renders a dropdown', () => {
    expect(wrapper.find('.dropdown-content.more')).to.have.length(1);
  });
});
