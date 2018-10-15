import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../src/CardTitle';

describe('<CardTitle />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<CardTitle image="">I am a very simple card</CardTitle>);
    expect(wrapper).toMatchSnapshot();
  });

  test('requires an image prop', () => {
    wrapper = shallow(
      <CardTitle image="url.jpg" reveal>
        I am a very simple card
      </CardTitle>
    );

    expect(wrapper.find('img').hasClass('activator')).toBeTruthy();
  });

  test('can have waves', () => {
    wrapper = shallow(
      <CardTitle image="url.jpg" waves="green">
        I am a very simple card
      </CardTitle>
    );

    expect(wrapper.hasClass('waves-green')).toBeTruthy();
  });

  test('accepts classnames', () => {
    wrapper = shallow(
      <CardTitle image="url.jpg" waves="green" className="find">
        I am a very simple card
      </CardTitle>
    );

    expect(wrapper.hasClass('find')).toBeTruthy();
  });
});
