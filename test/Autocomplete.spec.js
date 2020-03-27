import React from 'react';
import { shallow, mount } from 'enzyme';
import Autocomplete from '../src/Autocomplete';
import mocker from './helper/new-mocker';

describe('<Autocomplete />', () => {
  const autocompleteInitMock = jest.fn();
  const data = {
    Apple: null,
    Microsoft: null,
    Google: 'http://placehold.it/250x250',
    'Apple Inc': null
  };
  const componentId = 'testAutocompleteId';

  let wrapper;

  beforeEach(() => {
    autocompleteInitMock.mockClear();
  });

  test('renders', () => {
    wrapper = shallow(
      <Autocomplete title="Test Title" id={componentId} options={{ data }} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('handles layout classes', () => {
    wrapper = shallow(<Autocomplete s={4} m={6} />);
    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeTruthy();
    expect(wrapper.hasClass('s4')).toBeTruthy();
    expect(wrapper.hasClass('m6')).toBeTruthy();
  });

  test('renders placeholder', () => {
    wrapper = shallow(<Autocomplete placeholder="Name" />);
    expect(wrapper.find('input').prop('placeholder')).toEqual('Name');
  });

  describe('initialises', () => {
    const autocompleteInstanceDestroyMock = jest.fn();
    const autocompleteMock = {
      init: (el, options) => {
        autocompleteInitMock(options);
        return {
          destroy: autocompleteInstanceDestroyMock
        };
      }
    };
    const restore = mocker('Autocomplete', autocompleteMock);
    beforeEach(() => {
      autocompleteInitMock.mockClear();
      autocompleteInstanceDestroyMock.mockClear();
    });

    test('calls Autocomplete', () => {
      mount(<Autocomplete />);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('with new data', () => {
    test('reinitializes', () => {
      const wrapper = mount(<Autocomplete />);

      expect(autocompleteInitMock).lastCalledWith({
        data: {},
        limit: Infinity,
        minLength: 1,
        onAutocomplete: null,
        sortFunction: null
      });

      wrapper.setProps({
        options: {
          data: {
            foo: 'bar'
          }
        }
      });

      expect(autocompleteInitMock).lastCalledWith({
        data: {
          foo: 'bar'
        }
      });
    });
  });
});
