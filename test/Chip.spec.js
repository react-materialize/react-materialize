import React from 'react';
import { shallow } from 'enzyme';
import Chip from '../src/Chip';

describe('<Chip />', () => {
  let wrapper;

  test('should render', () => {
    wrapper = shallow(<Chip />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts a close prop', () => {
    wrapper = shallow(<Chip close />);
    expect(wrapper.find('i.material-icons.close')).toHaveLength(1);
  });

  test('accepts children', () => {
    let child = <p className="child">Child</p>;
    wrapper = shallow(<Chip close>{child}</Chip>);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts className', () => {
    wrapper = shallow(<Chip className="find" />);
    expect(wrapper.hasClass('find')).toBeTruthy();
  });
});
