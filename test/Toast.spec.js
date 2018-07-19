import React from 'react';
import { shallow } from 'enzyme';
import Toast from '../src/Toast';
import mocker from './helper/new-mocker';

describe('Toast', () => {
  const options = {
    html: 'foo',
    classes: 'bar'
  };

  const toastMock = jest.fn();
  const restore = mocker('toast', toastMock);

  afterAll(() => {
    restore();
  });

  const child = 'toast content';

  const wrapper = shallow(<Toast options={options}>{child}</Toast>);

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should create a child element', () => {
    expect(wrapper.contains(child)).toEqual(true);
  });

  test('calls Toast with clicked with options', () => {
    wrapper.simulate('click');
    expect(toastMock).toHaveBeenCalledWith(options);
  });
});
