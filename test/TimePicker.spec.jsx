import React from 'react';
import { render, screen } from '@testing-library/react';
import TimePicker from '../src/TimePicker';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

describe('<TimePicker />', () => {
  const timePickerInitMock = vi.fn();
  const timePickerInstanceDestroyMock = vi.fn();
  const restore = mocker('Timepicker', {
    init: (el, options) => {
      timePickerInitMock(el, options);
      return { destroy: timePickerInstanceDestroyMock };
    }
  });

  beforeEach(() => {
    timePickerInitMock.mockClear();
    timePickerInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('renders a timepicker text input', () => {
    const { container } = render(<TimePicker />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('timepicker');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'TimePicker-mockId');
    expect(container.firstChild).toHaveClass('input-field', 'col');
  });

  test('renders with a label', () => {
    render(<TimePicker label="TimePicker label" />);
    expect(screen.getByLabelText('TimePicker label')).toHaveAttribute(
      'id',
      'TimePicker-mockId'
    );
  });

  test('accepts external `id` value', () => {
    render(<TimePicker id="ID" label="Time" />);
    expect(screen.getByLabelText('Time')).toHaveAttribute('id', 'ID');
  });

  describe('js init', () => {
    test('uses default options if none are given', () => {
      render(<TimePicker />);

      expect(timePickerInitMock).toHaveBeenCalledTimes(1);
      expect(timePickerInitMock).toHaveBeenCalledWith(
        screen.getByRole('textbox'),
        {
          duration: 350,
          container: null,
          showClearBtn: false,
          defaultTime: 'now',
          fromNow: 0,
          i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok'
          },
          autoClose: false,
          twelveHour: true,
          vibrate: true,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          onSelect: null
        }
      );
    });

    test('passes custom options', () => {
      const options = { twelveHour: false, autoClose: true };
      render(<TimePicker options={options} />);

      expect(timePickerInitMock).toHaveBeenCalledWith(
        screen.getByRole('textbox'),
        options
      );
    });

    test('wires onChange as onSelect, keeping other options', () => {
      const onChange = vi.fn();
      const options = { twelveHour: false, onSelect: () => {} };
      render(<TimePicker options={options} onChange={onChange} />);

      const passed = timePickerInitMock.mock.calls[0][1];
      expect(passed).toEqual({ twelveHour: false, onSelect: onChange });

      passed.onSelect(13, 37);
      expect(onChange).toHaveBeenCalledWith(13, 37);
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<TimePicker />);
      expect(timePickerInstanceDestroyMock).not.toHaveBeenCalled();

      unmount();
      expect(timePickerInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });

    test('re-initialises when options change', () => {
      const { rerender } = render(<TimePicker options={{ duration: 100 }} />);

      const nextOptions = { duration: 200 };
      rerender(<TimePicker options={nextOptions} />);

      expect(timePickerInstanceDestroyMock).toHaveBeenCalledTimes(1);
      expect(timePickerInitMock).toHaveBeenCalledTimes(2);
      expect(timePickerInitMock).toHaveBeenLastCalledWith(
        screen.getByRole('textbox'),
        nextOptions
      );
    });

    test('does not re-initialise when re-rendered with the same props', () => {
      const { rerender } = render(<TimePicker />);
      rerender(<TimePicker />);

      expect(timePickerInitMock).toHaveBeenCalledTimes(1);
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { rerender } = render(<TimePicker label="Time" />);
      const before = screen.getByRole('textbox').id;
      rerender(<TimePicker label="Time" />);

      expect(screen.getByRole('textbox').id).toBe(before);
      expect(screen.getByLabelText('Time').id).toBe(before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
