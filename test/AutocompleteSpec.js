/* global describe, it, expect, context, before */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Autocomplete from '../src/Autocomplete';

const data = {
  Apple: null,
  Microsoft: null,
  Google: 'http://placehold.it/250x250'
};

const componentId = 'testAutocompleteId';
const wrapper = shallow(
  <Autocomplete title="Test Title" data={data} id={componentId} />
);

describe('<Autocomplete />', () => {
  const typedKey = 'A';

  test('renders', () => {
    expect(wrapper.find('.autocomplete')).toHaveLength(1);
  });

  test('generates correct ID for input and label', () => {
    expect(wrapper.find('.autocomplete').props()).toHaveProperty('id', componentId);
    expect(wrapper.find('label').props()).toHaveProperty('htmlFor', componentId);
  });

  describe('on input change', () => {
    beforeAll(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } });
    });

    test('renders a dropdown', () => {
      expect(wrapper.find('.autocomplete-content')).toHaveLength(1);
    });

    test("highlight's results", () => {
      expect(wrapper.find('.highlight').text()).toBe(typedKey);
    });
  });

  describe('on dropdown select', () => {
    const expectedValue = 'Apple';

    beforeAll(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } });
      wrapper.find('ul li').simulate('click');
    });

    test('updates the state with the new value', () => {
      expect(wrapper.state('value')).toBe(expectedValue);
    });

    test('adds clicked value to input', () => {
      expect(wrapper.find('.autocomplete').prop('value')).toBe(expectedValue);
    });
  });

  describe('on controlled input', () => {
    const expectedValue = 'Apple';

    const props = {
      onChange: sinon.spy(),
      onAutocomplete: sinon.spy()
    };

    const wrapper2 = shallow(
      <Autocomplete title="Test Title" data={data} value="" {...props} />
    );

    beforeAll(() => {
      wrapper2
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } });
    });

    test('updates the state with the new value', () => {
      expect(wrapper2.state('value')).toBe(typedKey);
    });

    test('calls only onChange callback', () => {
      expect(props.onChange.calledOnce).toBe(true);
      expect(props.onChange.args[0][1]).toBe(typedKey);
      expect(props.onAutocomplete.notCalled).toBe(true);
    });

    test('works after value change', () => {
      wrapper2.setProps({
        ...props,
        value: typedKey
      });
      expect(wrapper2.state('value')).toBe(typedKey);
      expect(props.onChange.calledOnce).toBe(true);
      expect(props.onAutocomplete.notCalled).toBe(true);
    });

    test('adds clicked value to input', () => {
      wrapper2.find('ul li').simulate('click');

      expect(wrapper2.find('.autocomplete').prop('value')).toBe(expectedValue);
    });

    test('calls callbacks after autocomplete', () => {
      expect(props.onChange.calledTwice).toBe(true);
      expect(props.onChange.args[1][1]).toBe(expectedValue);
      expect(props.onAutocomplete.calledOnce).toBe(true);
      expect(props.onAutocomplete.calledWith(expectedValue)).toBe(true);
    });

    test('clears input', () => {
      wrapper2.setProps({
        ...props,
        value: ''
      });
      expect(wrapper2.state('value')).toBe('');
      expect(props.onChange.calledTwice).toBe(true);
      expect(props.onAutocomplete.calledOnce).toBe(true);
    });
  });
});
