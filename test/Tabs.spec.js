import React from 'react';
import { shallow, mount } from 'enzyme';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import mocker from './helper/mocker';

describe('Tabs', () => {
  let wrapper;
  const tabsMock = jest.fn();
  const restore = mocker('tabs', tabsMock);

  const options = {
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
      expect(tabsMock).toHaveBeenCalled();
      wrapper.setProps({ className: 'test' });
      expect(tabsMock).toHaveBeenCalled();
    });
  });
});
