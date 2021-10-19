import React from 'react';
// import { shallow, mount } from 'enzyme';
import TextInput from '../src/TextInput';
import Icon from '../src/Icon';

describe.skip('<TextInput />', () => {
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
    wrapper = shallow(<TextInput password />);
    expect(wrapper.find('input').prop('type')).toEqual('password');
  });

  test('handles other props', () => {
    const mockOnChange = jest.fn();
    wrapper = shallow(<TextInput onChange={mockOnChange} />);
    wrapper.find('input').simulate('change', { target: { value: '7' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('handles file type', () => {
    wrapper = shallow(<TextInput type="file" label="File" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Icon', () => {
    test('renders as a string', () => {
      wrapper = shallow(<TextInput icon="cloud" />);
      expect(wrapper.find('i.material-icons.prefix')).toHaveLength(1);
    });

    test('renders as a node', () => {
      const mockIconClick = jest.fn();
      wrapper = shallow(
        <TextInput icon={<Icon onClick={mockIconClick}>cloud</Icon>} />
      );

      const iconWrapper = wrapper.find('Icon').shallow();
      expect(iconWrapper.find('i.material-icons.prefix')).toHaveLength(1);

      wrapper.find('Icon').simulate('click');
      expect(mockIconClick).toBeCalled();
    });
  });
});
