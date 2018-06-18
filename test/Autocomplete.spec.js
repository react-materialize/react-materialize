import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from '../src/Autocomplete';

const data = {
  Apple: null,
  Microsoft: null,
  Google: 'http://placehold.it/250x250',
  'Apple Inc': null
};

const componentId = 'testAutocompleteId';
const wrapper = shallow(
  <Autocomplete title="Test Title" data={data} id={componentId} />
);

describe('<Autocomplete />', () => {
  const typedKey = 'A';

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('generates correct ID for input and label', () => {
    expect(wrapper.find('.autocomplete').props()).toHaveProperty(
      'id',
      componentId
    );
    expect(wrapper.find('label').props()).toHaveProperty(
      'htmlFor',
      componentId
    );
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
      expect(wrapper.find('.highlight').length).toEqual(2);
      expect(
        wrapper
          .find('.highlight')
          .first()
          .text()
      ).toEqual(typedKey);
    });
  });

  describe('on dropdown first item select', () => {
    const expectedValue = 'Apple';

    beforeAll(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } });
      wrapper
        .find('ul li')
        .first()
        .simulate('click');
    });

    test('updates the state with the new value', () => {
      expect(wrapper.state('value')).toEqual(expectedValue);
    });

    test('adds clicked value to input', () => {
      expect(wrapper.find('.autocomplete').prop('value')).toEqual(
        expectedValue
      );
    });

    test('hides other matches', () => {
      expect(wrapper.find('.highlight').length).toEqual(0);
    });
  });

  describe('on dropdown second item select', () => {
    const expectedValue = 'Apple Inc';

    beforeAll(() => {
      wrapper
        .find('.autocomplete')
        .simulate('change', { target: { value: typedKey } });
      wrapper
        .find('ul li')
        .last()
        .simulate('click');
    });

    test('updates the state with the new value', () => {
      expect(wrapper.state('value')).toEqual(expectedValue);
    });

    test('adds clicked value to input', () => {
      expect(wrapper.find('.autocomplete').prop('value')).toEqual(
        expectedValue
      );
    });

    test('hides other matches', () => {
      expect(wrapper.find('.highlight').length).toEqual(0);
    });
  });

  describe('on controlled input', () => {
    const expectedValue = 'Apple';

    const props = {
      onChange: jest.fn(),
      onAutocomplete: jest.fn()
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
      expect(wrapper2.state('value')).toEqual(typedKey);
    });

    test('calls only onChange callback', () => {
      expect(props.onChange).toHaveBeenCalled();
      expect(props.onChange.mock.calls[0][1]).toEqual(typedKey);
    });

    test('works after value change', () => {
      wrapper2.setProps({
        ...props,
        value: typedKey
      });
      expect(wrapper2.state('value')).toEqual(typedKey);
      expect(props.onChange).toHaveBeenCalled();
    });

    test('adds clicked value to input', () => {
      wrapper2
        .find('ul li')
        .first()
        .simulate('click');

      expect(wrapper2.find('.autocomplete').prop('value')).toEqual(
        expectedValue
      );
    });

    test('calls callbacks after autocomplete', () => {
      expect(props.onChange).toHaveBeenCalledTimes(2);
      expect(props.onChange.mock.calls[1][1]).toEqual(expectedValue);
      expect(props.onAutocomplete).toHaveBeenCalledWith(expectedValue);
    });

    test('clears input', () => {
      wrapper2.setProps({
        ...props,
        value: ''
      });
      expect(wrapper2.state('value')).toEqual('');
      expect(props.onChange).toHaveBeenCalledTimes(2);
      expect(props.onAutocomplete).toHaveBeenCalled();
    });
  });
});
