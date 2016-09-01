/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../src/Breadcrumb';

const wrapper = shallow(<Breadcrumb />);

describe('<Breadcrumb />', () => {
  it('renders', () => {
    expect(wrapper).to.have.length(1);
  });
});
