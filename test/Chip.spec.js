import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Chip from '../src/Chip';

describe('<Chip />', () => {
  let wrapper;

  test('should render', () => {
    wrapper = shallow(<Chip />);
    expect(wrapper).toMatchSnapshot();
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
