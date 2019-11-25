import React from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from '../src/DatePicker';
import mocker from './helper/new-mocker';

describe('<DatePicker />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<DatePicker />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with a label', () => {
    wrapper = shallow(<DatePicker label="DatePicker label" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts external `id` value', () => {
    wrapper = shallow(<DatePicker id="ID" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('initialises', () => {
    const datePickerInitMock = jest.fn();
    const datePickerInstanceDestroyMock = jest.fn();
    const datePickerMock = {
      init: (el, options) => {
        datePickerInitMock(options);
        return {
          destroy: datePickerInstanceDestroyMock
        };
      }
    };

    const restore = mocker('Datepicker', datePickerMock);

    beforeEach(() => {
      datePickerInitMock.mockClear();
      datePickerInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('uses default options if none are given', () => {
      wrapper = mount(<DatePicker />);

      expect(datePickerInitMock).toHaveBeenCalledWith({
        autoClose: false,
        format: 'mmm dd, yyyy',
        parse: null,
        defaultDate: null,
        setDefaultDate: false,
        disableWeekends: false,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        isRTL: false,
        showMonthAfterYear: false,
        showDaysInNextAndPreviousMonths: false,
        container: null,
        showClearBtn: false,
        i18n: {
          cancel: 'Cancel',
          clear: 'Clear',
          done: 'Ok',
          previousMonth: '‹',
          nextMonth: '›',
          months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          monthsShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          weekdays: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
      });
    });
  });
});
