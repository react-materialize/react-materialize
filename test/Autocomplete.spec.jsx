import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Autocomplete from '../src/Autocomplete';
import Icon from '../src/Icon';
import mocker from './helper/new-mocker';

describe('<Autocomplete />', () => {
  const autocompleteInitMock = vi.fn();
  const autocompleteInstanceDestroyMock = vi.fn();
  const restore = mocker('Autocomplete', {
    init: (el, options) => {
      autocompleteInitMock(el, options);
      return { destroy: autocompleteInstanceDestroyMock };
    }
  });
  const data = {
    Apple: null,
    Microsoft: null,
    Google: 'http://placehold.it/250x250',
    'Apple Inc': null
  };
  let updateTextFieldsSpy;

  beforeEach(() => {
    autocompleteInitMock.mockClear();
    autocompleteInstanceDestroyMock.mockClear();
    updateTextFieldsSpy = vi.spyOn(M, 'updateTextFields');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    restore();
  });

  test('renders an autocomplete input labelled by its title', () => {
    const { container } = render(
      <Autocomplete title="Test Title" options={{ data }} />
    );

    const input = screen.getByLabelText('Test Title');
    expect(input).toHaveClass('autocomplete');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'Autocomplete-mockId');
    expect(screen.getByText('Test Title')).toHaveAttribute(
      'for',
      'Autocomplete-mockId'
    );
    expect(container.firstChild).toHaveClass('input-field', 'col');
  });

  test('accepts an external id', () => {
    render(<Autocomplete id="search" title="Search" />);
    expect(screen.getByLabelText('Search')).toHaveAttribute('id', 'search');
  });

  test('renders with layout classes and className', () => {
    const { container } = render(
      <Autocomplete s={4} m={6} className="custom" />
    );
    expect(container.firstChild).toHaveClass(
      'input-field',
      'col',
      's4',
      'm6',
      'custom'
    );
  });

  test('renders with icon', () => {
    const { container } = render(<Autocomplete icon={<Icon>textsms</Icon>} />);
    const icon = screen.getByText('textsms');

    expect(icon).toHaveClass('material-icons', 'prefix');
    expect(icon).toBe(container.firstChild.firstChild);
  });

  test('passes other props to the input', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Autocomplete placeholder="Find" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Find');
    await user.type(input, 'A');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('A');
  });

  describe('initialises javascript', () => {
    test('calls Autocomplete with default options', () => {
      render(<Autocomplete />);

      expect(updateTextFieldsSpy).toHaveBeenCalledTimes(1);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);
      expect(autocompleteInitMock).toHaveBeenCalledWith(
        screen.getByRole('textbox'),
        {
          data: {},
          limit: Infinity,
          minLength: 1,
          onAutocomplete: null,
          sortFunction: null
        }
      );
    });

    test('calls Autocomplete with given options', () => {
      const options = { data, limit: 2 };
      render(<Autocomplete options={options} />);

      expect(autocompleteInitMock).toHaveBeenCalledWith(
        screen.getByRole('textbox'),
        options
      );
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<Autocomplete />);
      expect(autocompleteInstanceDestroyMock).not.toHaveBeenCalled();

      unmount();
      expect(autocompleteInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('with new data prop', () => {
    test('reinitializes javascript', () => {
      const { rerender } = render(<Autocomplete />);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(1);

      rerender(<Autocomplete options={{ data: { foo: 'bar' } }} />);

      expect(autocompleteInstanceDestroyMock).toHaveBeenCalledTimes(1);
      expect(autocompleteInitMock).toHaveBeenCalledTimes(2);
      expect(autocompleteInitMock).toHaveBeenLastCalledWith(
        screen.getByRole('textbox'),
        { data: { foo: 'bar' } }
      );
    });
  });
});
