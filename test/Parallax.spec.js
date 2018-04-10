import React from 'react';
import { shallow } from 'enzyme';
import Parallax from '../src/Parallax';
import mocker from './helper/mocker';

describe('<Parallax />', () => {
  let wrapper;
  const parallaxMock = jest.fn();
  const restore = mocker('parallax', parallaxMock);

  afterAll(() => {
    restore();
  });

  test('should render a Parallax', () => {
    wrapper = shallow(<Parallax />);
    expect(wrapper).toMatchSnapshot();
  });
});
