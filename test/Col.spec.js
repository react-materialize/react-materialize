import React from 'react';
import { shallow } from 'enzyme';
import Col from '../src/Col';

let wrapper = shallow(<Col />);

describe('<Col />', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts sizes as props', () => {
    wrapper = shallow(<Col s={4} m={6} l={8} />);
    expect(wrapper.find('.col').hasClass('s4 m6 l8')).toEqual(true);
  });

  test('accepts push as props', () => {
    wrapper = shallow(<Col push="s4" />);
    expect(wrapper.find('.col').hasClass('push-s4'));
  });

  test('accepts pull as props', () => {
    wrapper = shallow(<Col pull="s4" />);
    expect(wrapper.find('.col').hasClass('pull-s4'));
  });
});
