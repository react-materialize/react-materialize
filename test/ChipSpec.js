/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Chip from '../src/Chip';

let wrapper = shallow(<Chip />);

describe('<Chip />', () => {
  test('should render', () => {
    assert(wrapper.find('.chip').length, 'with a chip classname');
  });

  test('accepts a close prop', () => {
    wrapper = shallow(<Chip close />);
    assert(wrapper.find('i.material-icons.close').length, 'with a close icon');
  });

  test('accepts children', () => {
    let child = <p className="child">Child</p>;
    wrapper = shallow(<Chip close>{child}</Chip>);
    assert(wrapper.contains(child), 'should not be empty');
  });
});
