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

      expect(datePickerInitMock).toHaveBeenCalled();
    });
  });
});
