import React from 'react';
import { mount } from 'enzyme';

import Toast from '../src/Toast';
describe('<Toast />', () => {
  const wrappper = mount(<Toast toast="I am a toast">Toast</Toast>);
  window.Materialize = { toast: jest.fn() };

  it('renders properly', () => {
    expect(wrappper).toMatchSnapshot();
  });

  it('should fire the toast on click', () => {
    wrappper.find('button').simulate('click');
    expect(window.Materialize.toast).toHaveBeenCalled();
  });
});
