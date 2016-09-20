/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import SideNav from '../src/SideNav';

let wrapper = shallow(<SideNav />);

describe('<SideNav />', () => {
  it('should render', () => {
    assert(wrapper.find('nav').length);
  });
});
