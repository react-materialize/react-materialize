import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import mocker from './helper/mocker';

describe('Tabs', () => {
  let wrapper;
  const tabsMock = jest.fn();
  const restore = mocker('tabs', tabsMock);

  const options = {
    duration: 400,
    onShow: jest.fn(),
    swipeable: true,
    responsiveThreshold: 2
  };

  wrapper = shallow(
    <Tabs>
      <Tab title="one">One</Tab>
      <Tab title="Two">Two</Tab>
    </Tabs>
  );

  afterAll(() => {
    restore();
  });

  test('should create list of Tab itemt', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('with options', () => {
    beforeEach(() => {
      wrapper = mount(
        <Tabs tabOptions={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
    });

    test('initializes Tabs with options', () => {
      expect(tabsMock).toHaveBeenCalledWith(options);
    });
  });

  describe('when updated', () => {
    beforeEach(() => {
      wrapper = mount(
        <Tabs tabOptions={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
    });

    test('should re-initialize with options', () => {
      expect(tabsMock).toHaveBeenCalledWith(options);
      expect(tabsMock).toHaveBeenCalledTimes(3);
      wrapper.setProps({ className: 'test' });
      expect(tabsMock).toHaveBeenCalledWith(options);
      expect(tabsMock).toHaveBeenCalledTimes(4);
    });
  });

  describe('when unmounted', () => {
    beforeEach(() => {
      wrapper.unmount();
    });

    test('should be destroyed', () => {
      expect(tabsMock).toHaveBeenCalledWith('destroy');
      expect(tabsMock).toHaveBeenCalledTimes(5);
    });
  });
});
