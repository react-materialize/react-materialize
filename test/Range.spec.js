import React from 'react';
import { shallow } from 'enzyme';
import Range from '../src/Range';
import mocker from './helper/new-mocker';

describe('<Range />', () => {
  let wrapper;
  const mockInit = jest.fn();

  const rangeMock = { init: mockInit };
  const restore = mocker('Range', rangeMock);

  test('renders', () => {
    wrapper = shallow(<Range min="10" max="99" />);
    expect(wrapper).toMatchSnapshot();
    expect(mockInit).toHaveBeenCalledTimes(1);
  });
});
