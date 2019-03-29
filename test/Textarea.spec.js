import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../src/Textarea';

describe('<Textarea />', () => {
  let wrapper;

  test('Textarea', () => {
    wrapper = shallow(<Textarea />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Handles layout classes', () => {
    wrapper = shallow(<Textarea s={4} m={6} />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeTruthy();
    expect(wrapper.hasClass('s4')).toBeTruthy();
    expect(wrapper.hasClass('m6')).toBeTruthy();
  });

  test('Handles removing layout classes', () => {
    wrapper = shallow(<Textarea s={4} m={6} noLayout />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeFalsy();
    expect(wrapper.hasClass('s4')).toBeFalsy();
    expect(wrapper.hasClass('m6')).toBeFalsy();
  });

  test('Disabled', () => {
    wrapper = shallow(<Textarea value="I was here" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Placeholder', () => {
    wrapper = shallow(<Textarea placeholder="I was here" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Label', () => {
    wrapper = shallow(<Textarea label="Write something here..." />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Icon', () => {
    wrapper = shallow(<Textarea icon="mode_edit" />);
    expect(wrapper).toMatchSnapshot();
  });
});
