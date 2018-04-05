import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../src/MenuItem';

let wrapper = shallow(<MenuItem className="more" breadcrumbItem href="/" />);

describe('<MenuItem />', () => {
  test('render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a href if provided', () => {
    expect(wrapper.props().href).toEqual('/');
  });
});
