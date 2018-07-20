import React from 'react';
import { shallow, mount } from 'enzyme';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import mocker from './helper/mocker';
import * as idgenHolder from '../src/idgen';

describe('Tabs', () => {
  let wrapper;
  const tabsMock = jest.fn();
  const restore = mocker('tabs', tabsMock);
  const idgenSpy = jest.spyOn(idgenHolder, 'default');

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
    idgenSpy.mockRestore();
  });

  beforeEach(() => {
    tabsMock.mockClear();
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
      idgenSpy.mockClear();
      wrapper = mount(
        <Tabs tabOptions={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
    });

    test('should re-initialize with options', () => {
      expect(tabsMock).toHaveBeenCalledWith(options);
      tabsMock.mockClear();
      wrapper.setProps({ className: 'test' });
      expect(tabsMock).toHaveBeenCalledWith(options);
    });

    test('idgen is not called after update', () => {
      expect(idgenSpy).toHaveBeenCalledTimes(1);
      wrapper.setProps({ className: 'test' });
      expect(idgenSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('when unmounted', () => {
    beforeEach(() => {
      wrapper.unmount();
    });

    test('should be destroyed', () => {
      expect(tabsMock).toHaveBeenCalledWith('destroy');
    });
  });
});
