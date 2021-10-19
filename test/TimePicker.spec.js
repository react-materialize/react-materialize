import React from 'react';
// import { shallow, mount } from 'enzyme';
import TimePicker from '../src/TimePicker';
import mocker from './helper/new-mocker';

describe.skip('<TimePicker />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<TimePicker />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with a label', () => {
    wrapper = shallow(<TimePicker label="TimePicker label" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts external `id` value', () => {
    wrapper = shallow(<TimePicker id="ID" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('initialises', () => {
    const timePickerInitMock = jest.fn();
    const timePickerInstanceDestroyMock = jest.fn();
    const timePickerMock = {
      init: (el, options) => {
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
      wrapper = mount(<TimePicker />);

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
