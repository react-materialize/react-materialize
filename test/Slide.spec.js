import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../src/Slide';

describe('<Slide />', () => {
  const wrapper = shallow(<Slide src="#" />);

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a Slide', () => {
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.childAt(0).is({ src: '#' })).toEqual(true);
  });
});
