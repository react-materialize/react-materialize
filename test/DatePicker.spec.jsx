import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from '../src/DatePicker';
import mocker from './helper/new-mocker';

describe('<DatePicker />', () => {
  const datePickerInitMock = vi.fn();
  const datePickerInstanceDestroyMock = vi.fn();
  const restore = mocker('Datepicker', {
    init: (el, options) => {
      datePickerInitMock(el, options);
      return { destroy: datePickerInstanceDestroyMock };
    }
  });

  beforeEach(() => {
    datePickerInitMock.mockClear();
    datePickerInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('renders a datepicker text input', () => {
    const { container } = render(<DatePicker />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('datepicker');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'DatePicker-mockId');
    expect(container.firstChild).toHaveClass('input-field', 'col');
  });

  test('renders with a label', () => {
    render(<DatePicker label="DatePicker label" />);
    expect(screen.getByLabelText('DatePicker label')).toHaveAttribute(
      'id',
      'DatePicker-mockId'
    );
  });

  test('accepts external `id` value', () => {
    render(<DatePicker id="ID" label="Date" />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('id', 'ID');
  });

  test('passes TextInput props through', () => {
    const { container } = render(<DatePicker s={6} disabled />);
    expect(container.firstChild).toHaveClass('s6');
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  describe('initialises', () => {
    test('uses default options if none are given', () => {
      render(<DatePicker />);

      expect(datePickerInitMock).toHaveBeenCalledTimes(1);
      const [el, options] = datePickerInitMock.mock.calls[0];
      expect(el).toBe(screen.getByRole('textbox'));
      expect(options).toEqual(
        expect.objectContaining({
          autoClose: false,
          format: 'mmm dd, yyyy',
          defaultDate: null,
          setDefaultDate: false,
          firstDay: 0,
          yearRange: 10,
          showClearBtn: false,
          events: [],
          onSelect: null
        })
      );
      expect(options.i18n).toEqual(
        expect.objectContaining({
          cancel: 'Cancel',
          clear: 'Clear',
          done: 'Ok'
        })
      );
    });

    test('passes custom options', () => {
      const options = { autoClose: true, format: 'yyyy-mm-dd' };
      render(<DatePicker options={options} />);

      expect(datePickerInitMock).toHaveBeenCalledWith(
        screen.getByRole('textbox'),
        options
      );
    });

    test('wires onChange as onSelect, keeping other options', () => {
      const onChange = vi.fn();
      const options = { autoClose: true, onSelect: () => {} };
      render(<DatePicker options={options} onChange={onChange} />);

      const passed = datePickerInitMock.mock.calls[0][1];
      expect(passed).toEqual({ autoClose: true, onSelect: onChange });

      const date = new Date(2020, 0, 1);
      passed.onSelect(date);
      expect(onChange).toHaveBeenCalledWith(date);
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<DatePicker />);
      expect(datePickerInstanceDestroyMock).not.toHaveBeenCalled();

      unmount();
      expect(datePickerInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });

    test('re-initialises when options change', () => {
      const { rerender } = render(<DatePicker options={{ firstDay: 0 }} />);
      expect(datePickerInitMock).toHaveBeenCalledTimes(1);

      const nextOptions = { firstDay: 1 };
      rerender(<DatePicker options={nextOptions} />);

      expect(datePickerInstanceDestroyMock).toHaveBeenCalledTimes(1);
      expect(datePickerInitMock).toHaveBeenCalledTimes(2);
      expect(datePickerInitMock).toHaveBeenLastCalledWith(
        screen.getByRole('textbox'),
        nextOptions
      );
    });
  });
});
