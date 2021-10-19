import React from 'react';
// import { shallow } from 'enzyme';
import Toast from '../src/Toast';
import mocker from './helper/new-mocker';

describe.skip('Toast', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should create a child element', () => {
    expect(wrapper.contains(child)).toEqual(true);
  });

  test('calls Toast with clicked with options', () => {
    wrapper.simulate('click');
    expect(toastMock).toHaveBeenCalledWith(options);
  });
  describe('undefined M', () => {
    let __M;
    beforeEach(() => {
      __M = global.M;
      global.M = undefined;
    });
    afterEach(() => {
      global.M = __M;
    });
    test('doesnt throw without M', () => {
      const undefWrapper = shallow(<Toast options={options}>{child}</Toast>);
      expect(() => undefWrapper.simulate('click')).not.toThrow();
    });
  });
});
