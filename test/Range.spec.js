import React from 'react';
import { shallow } from 'enzyme';
import Range from '../src/Range';

describe('<Range />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Range min="10" max="99" />);
    expect(wrapper).toMatchSnapshot();
  });
});
