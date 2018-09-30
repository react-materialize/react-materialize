import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../src/Select';
import mocker from './helper/new-mocker';

describe('<Select />', () => {
  let wrapper;

  test('handles layout classes', () => {
    wrapper = shallow(<Select s={4} m={6} />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeTruthy();
    expect(wrapper.hasClass('s4')).toBeTruthy();
    expect(wrapper.hasClass('m6')).toBeTruthy();
  });

  test('handles removing layout classes', () => {
    wrapper = shallow(<Select s={4} m={6} noLayout />);

    expect(wrapper.hasClass('input-field')).toBeTruthy();
    expect(wrapper.hasClass('col')).toBeFalsy();
    expect(wrapper.hasClass('s4')).toBeFalsy();
    expect(wrapper.hasClass('m6')).toBeFalsy();
  });

  test('renders placeholder', () => {
    wrapper = shallow(<Select placeholder="Name" />);
    expect(wrapper.find('select').prop('placeholder')).toEqual('Name');
  });

  test('renders label', () => {
    wrapper = shallow(<Select label="Name" />);
    expect(wrapper.find('label').text()).toEqual('Name');
  });

  test('handles validate', () => {
    wrapper = shallow(<Select validate />);
    expect(wrapper.find('select.validate')).toHaveLength(1);
  });

  test('handles selectClassName', () => {
    wrapper = shallow(<Select validate selectClassName={'hello red'} />);
    expect(wrapper.find('select.hello.red.validate')).toHaveLength(1);
  });

  test('calls onChange if provided', () => {
    wrapper = shallow(<Select />);
    wrapper.setState({ value: 'hello' });
    expect(wrapper.find('select').prop('value')).toEqual('hello');
  });

  test('with icon', () => {
    wrapper = shallow(<Select icon="cloud" />);
    expect(wrapper.find('i.material-icons.prefix')).toHaveLength(1);
  });

  test('renders options', () => {
    wrapper = shallow(
      <Select>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </Select>
    );

    expect(wrapper.find('option')).toHaveLength(2);
  });

  test('renders multiple', () => {
    wrapper = shallow(<Select multiple />);
    expect(wrapper.find('select.multiple')).toHaveLength(1);
  });

  describe('initialises', () => {
    const selectInitMock = jest.fn();
    const selectInstanceDestroyMock = jest.fn();
    const selectMock = {
      init: (el, options) => {
        selectInitMock(options);
        return {
          destroy: selectInstanceDestroyMock
        };
      }
    };
    const restore = mocker('FormSelect', selectMock);

    beforeEach(() => {
      selectInitMock.mockClear();
      selectInstanceDestroyMock.mockClear();
    });

    test('calls FormSelect', () => {
      mount(<Select />);

      expect(selectInitMock).toHaveBeenCalledTimes(1);
    });
  });
});
