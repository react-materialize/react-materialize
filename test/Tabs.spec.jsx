import React from 'react';
import { render } from '@testing-library/react';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import mocker from './helper/new-mocker';

describe('Tabs', () => {
  const tabsInitMock = jest.fn();
  const tabInstanceDestroyMock = jest.fn();
  const tabsMock = {
    init: (el, options) => {
      tabsInitMock(options);
      return {
        destroy: tabInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Tabs', tabsMock);

  const options = {
    duration: 400,
    onShow: jest.fn(),
    swipeable: true,
    responsiveThreshold: 2
  };

  afterAll(() => {
    restore();
  });

  beforeEach(() => {
    tabsInitMock.mockClear();
    tabInstanceDestroyMock.mockClear();
  });

  test('should create list of Tab items', () => {
    const { container } = render(
      <Tabs>
        <Tab title="one">One</Tab>
        <Tab title="Two">Two</Tab>
      </Tabs>
    );

    expect(container).toMatchSnapshot();
  });

  describe('with options', () => {
    test('initializes Tabs with options', () => {
      render(
        <Tabs options={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );

      expect(tabsInitMock).toHaveBeenCalledWith(options);
    });
  });

  describe('when unmounted', () => {
    test('should be destroyed', () => {
      const { unmount } = render(
        <Tabs options={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
      unmount();

      expect(tabInstanceDestroyMock).toHaveBeenCalled();
    });
  });

  describe('children with idx', () => {
    test('consumes passed idx', () => {
      const { container } = render(
        <Tabs options={options}>
          <Tab idx="one" title="one">
            One
          </Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );

      expect(container.querySelector('#tab_one')).toBeTruthy();
    });
  });
});
