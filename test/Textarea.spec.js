import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../src/Textarea';

describe('<Textarea />', () => {
  let wrapper;

  test('Textarea', () => {
    wrapper = shallow(<Textarea />);
    expect(wrapper).toMatchSnapshot();
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

  test('with custom className', () => {
    wrapper = shallow(<Textarea className="custom-class" />);
    const textareaElement = wrapper.find('textarea');
    expect(textareaElement.hasClass('materialize-textarea')).toBeTruthy();
    expect(textareaElement.hasClass('custom-class')).toBeTruthy();
  });
});
