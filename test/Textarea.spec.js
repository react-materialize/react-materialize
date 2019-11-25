import React from 'react';
import { shallow, mount } from 'enzyme';
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
    wrapper = shallow(<Textarea icon="mode_edit" iconClassName="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with custom className', () => {
    wrapper = shallow(<Textarea className="custom-class" />);
    const textareaElement = wrapper.find('textarea');
    expect(textareaElement.hasClass('materialize-textarea')).toBeTruthy();
    expect(textareaElement.hasClass('custom-class')).toBeTruthy();
  });

  describe('undefined M', () => {
    let __M;
    beforeEach(() => {
      __M = global.M;
      global.M = undefined;
    });
    afterEach(() => {
      global.M = __M;
    });
    test('doesnt throw without M', () => {
      const element = mount(<Textarea />);
      expect(() => element.setProps({ label: 'foo' })).not.toThrow();
    });
  });
});
