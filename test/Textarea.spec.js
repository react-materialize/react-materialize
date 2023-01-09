import React from 'react';
// import { shallow, mount } from 'enzyme';
import Textarea from '../src/Textarea';

describe.skip('<Textarea />', () => {
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

  test('Value', () => {
    wrapper = shallow(<Textarea value="I was here" />);
    expect(wrapper.find('textarea').prop('value')).toEqual('I was here');
    expect(wrapper).toMatchSnapshot();
  });

  test('defaultValue renders as value', () => {
    wrapper = mount(<Textarea defaultValue="I was here" />);
    expect(wrapper.find('textarea').prop('defaultValue')).toEqual('I was here');
    expect(wrapper.find('textarea').instance().value).toEqual('I was here');
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
    wrapper = shallow(<Textarea icon="mode_edit" iconClassName="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with custom className', () => {
    wrapper = shallow(<Textarea className="custom-class" />);
    const textareaElement = wrapper.find('textarea');
    expect(textareaElement.hasClass('materialize-textarea')).toBeTruthy();
    expect(textareaElement.hasClass('custom-class')).toBeTruthy();
  });

  test('onChange is fired', () => {
    const onChangeMock = jest.fn();
    wrapper = shallow(<Textarea onChange={onChangeMock} />);
    const textarea = wrapper.find('textarea');
    textarea.simulate('change');
    expect(onChangeMock).toHaveBeenCalled();
  });

  test('Displays error messages', () => {
    wrapper = shallow(
      <Textarea label="Input with Error" error="this is an error" />
    );
    expect(wrapper.find('textarea').hasClass('invalid')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
