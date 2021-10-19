import React from 'react';
// import { mount } from 'enzyme';
import Range from '../src/Range';
import mocker from './helper/new-mocker';

describe.skip('<Range />', () => {
  let wrapper;
  const mockInit = jest.fn();

  const rangeMock = { init: mockInit };
  mocker('Range', rangeMock);

  test('renders', () => {
    wrapper = mount(<Range min="10" max="99" />);
    expect(wrapper).toMatchSnapshot();
    expect(mockInit).toHaveBeenCalledTimes(1);
  });
});
