import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../src/TextInput';

describe('<TextInput />', () => {
  let wrapper;

  test('handles layout classes', () => {
    wrapper = shallow(<TextInput s={4} m={6} />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeTruthy();
    expect(wrapper.hasClass('s4')).toBeTruthy();
    expect(wrapper.hasClass('m6')).toBeTruthy();
  });

  test('handles removing layout classes', () => {
    wrapper = shallow(<TextInput s={4} m={6} noLayout />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeFalsy();
    expect(wrapper.hasClass('s4')).toBeFalsy();
    expect(wrapper.hasClass('m6')).toBeFalsy();
  });

  test('renders placeholder', () => {
    wrapper = shallow(<TextInput placeholder="Name" />);
    expect(wrapper.find('input').prop('placeholder')).toEqual('Name');
  });

  test('renders label', () => {
    wrapper = shallow(<TextInput label="Name" />);
    expect(wrapper.find('label').text()).toEqual('Name');
  });

  test('handles validate', () => {
    wrapper = shallow(<TextInput validate />);
    expect(wrapper.find('input.validate')).toHaveLength(1);
  });

  test('handles inputClassName', () => {
    wrapper = shallow(<TextInput validate inputClassName={'hello red'} />);
    expect(wrapper.find('input.hello.red.validate')).toHaveLength(1);
  });

  test('handles other types', () => {
    wrapper = shallow(<TextInput type="password" />);
    expect(wrapper.find('input').prop('type')).toEqual('password');
  });

  test('calls onChange if provided', () => {
    wrapper = shallow(<TextInput />);
    wrapper.setState({ value: 'hello' });
    expect(wrapper.find('input').prop('value')).toEqual('hello');
  });

  test('with icon', () => {
    wrapper = shallow(<TextInput icon="cloud" />);
    expect(wrapper.find('i.material-icons.prefix')).toHaveLength(1);
  });
});
