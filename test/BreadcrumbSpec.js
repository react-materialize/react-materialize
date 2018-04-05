/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Breadcrumb from '../src/Breadcrumb';

const wrapper = shallow(<Breadcrumb />);

describe('<Breadcrumb />', () => {
  test('renders', () => {
    assert(wrapper.find('.breadcrumb'));
  });
});
