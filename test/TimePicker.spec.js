import React from 'react';
import { render } from '@testing-library/react';
import TimePicker from '../src/TimePicker';
import mocker from './helper/new-mocker';

describe('<TimePicker />', () => {
  test('renders', () => {
    const { container } = render(<TimePicker />);
    expect(container).toMatchSnapshot();
  });

  test('renders with a label', () => {
    const { queryByText } = render(<TimePicker label="TimePicker label" />);
    expect(queryByText('TimePicker label')).toBeTruthy();
  });

  describe('js init', () => {
    const timePickerInitMock = jest.fn();
    const timePickerInstanceDestroyMock = jest.fn();
    const timePickerMock = {
      init: (_, options) => {
        timePickerInitMock(options);
        return {
          destroy: timePickerInstanceDestroyMock
        };
      }
    };

    const restore = mocker('Timepicker', timePickerMock);

    beforeEach(() => {
      timePickerInitMock.mockClear();
      timePickerInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('uses default options if none are given', () => {
      render(<TimePicker />);

      expect(timePickerInitMock).toHaveBeenCalledWith({
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
      });
    });
  });
});
