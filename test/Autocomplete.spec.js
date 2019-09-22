import React from 'react';
import { shallow, mount } from 'enzyme';
import Autocomplete from '../src/Autocomplete';
import mocker from './helper/new-mocker';

describe('<Autocomplete />', () => {
  const data = {
    Apple: null,
    Microsoft: null,
    Google: 'http://placehold.it/250x250',
    'Apple Inc': null
  };

  const componentId = 'testAutocompleteId';

  let wrapper;

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
    const autocompleteInitMock = jest.fn();
    const autocompleteUpdateDataMock = jest.fn();
    const autocompleteInstanceDestroyMock = jest.fn();
    const autocompleteMock = {
      init: (el, options) => {
        autocompleteInitMock(options);
        return {
          destroy: autocompleteInstanceDestroyMock,
          updateData: autocompleteUpdateDataMock
        };
      }
    };
    const restore = mocker('Autocomplete', autocompleteMock);

    beforeEach(() => {
      autocompleteInitMock.mockClear();
      autocompleteInstanceDestroyMock.mockClear();
      autocompleteUpdateDataMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('calls Autocomplete', () => {
      mount(<Autocomplete />);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);
      expect(autocompleteUpdateDataMock).not.toHaveBeenCalled();
    });

    test('calls updateData when providing new data', () => {
      const wrapper = shallow(<Autocomplete />);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);
      wrapper.setProps({ options: { data: { Google: null } } });
      expect(autocompleteUpdateDataMock).toHaveBeenCalledWith({ Google: null });
    });

    test('does not calls updateData when providing the same data', () => {
      const wrapper = shallow(<Autocomplete options={{ data }} />);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);
      wrapper.setProps({ options: { data } });
      expect(autocompleteUpdateDataMock).not.toHaveBeenCalled();
    });
  });
});
