import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from '../src/Autocomplete';
import Icon from '../src/Icon';
import mocker from './helper/new-mocker';

describe('<Autocomplete />', () => {
  const autocompleteInitMock = jest.fn();
  const data = {
    Apple: null,
    Microsoft: null,
    Google: 'http://placehold.it/250x250',
    'Apple Inc': null
  };

  test('renders', () => {
    const { container } = render(
      <Autocomplete title="Test Title" options={{ data }} />
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with layout classes', () => {
    const { container } = render(<Autocomplete s={4} m={6} />);
    expect(container.querySelector('div.input-field.col.s4.m6')).toBeTruthy();
  });

  test('renders with icon', () => {
    const { container } = render(<Autocomplete icon={<Icon>textsms</Icon>} />);
    expect(container.querySelector('i.material-icons.prefix')).toBeTruthy();
  });

  describe('initialises javascript', () => {
    const autocompleteInstanceDestroyMock = jest.fn();
    const autocompleteMock = {
      init: (_, options) => {
        autocompleteInitMock(options);
        return {
          destroy: autocompleteInstanceDestroyMock
        };
      }
    };
    mocker('Autocomplete', autocompleteMock);

    beforeEach(() => {
      autocompleteInitMock.mockClear();
      autocompleteInstanceDestroyMock.mockClear();
    });

    test('calls Autocomplete', () => {
      render(<Autocomplete />);
      expect(autocompleteInitMock).lastCalledWith({
        data: {},
        limit: Infinity,
        minLength: 1,
        onAutocomplete: null,
        sortFunction: null
      });
    });
  });

  describe('with new data prop', () => {
    beforeEach(() => {
      autocompleteInitMock.mockClear();
    });

    test('reinitializes javascript', () => {
      const { rerender } = render(<Autocomplete />);

      expect(autocompleteInitMock).toHaveBeenNthCalledWith(1, {
        limit: Infinity,
        minLength: 1,
        onAutocomplete: null,
        sortFunction: null,
        data: {}
      });

      rerender(<Autocomplete options={{ data: { foo: 'bar' } }} />);

      expect(autocompleteInitMock).toHaveBeenNthCalledWith(2, {
        data: { foo: 'bar' }
      });
    });
  });
});
