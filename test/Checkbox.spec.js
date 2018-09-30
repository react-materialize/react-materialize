import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../src/Checkbox';

describe('<Checkbox />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Checkbox value="red" label="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders disabled', () => {
    wrapper = shallow(<Checkbox value="red" label="red" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  test('filled-in', () => {
    wrapper = shallow(<Checkbox value="red" label="red" filledIn />);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles checked state', () => {
    wrapper = shallow(<Checkbox value="red" label="red" checked />);
    expect(wrapper.state().checked).toEqual(true);
  });
});
