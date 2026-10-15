import React from 'react';
import { render } from '@testing-library/react';
import SideNav from '../src/SideNav';
import mocker from './helper/new-mocker';

describe('<SideNav />', () => {
  const sideNavInitMock = jest.fn();
  const sideNavInstanceDestroyMock = jest.fn();
  const sideNavMock = {
    init: (_, options) => {
      sideNavInitMock(options);
      return {
        destroy: sideNavInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Sidenav', sideNavMock);
  const trigger = <button className="red">Show sidenav</button>;

  afterAll(() => {
    restore();
  });

  beforeEach(() => {
    sideNavInitMock.mockClear();
    sideNavInstanceDestroyMock.mockClear();
  });

  test('renders', () => {
    const { container } = render(<SideNav trigger={trigger} />);
    expect(container).toMatchSnapshot();
  });

  test('can be `fixed`', () => {
    const { container } = render(<SideNav trigger={trigger} fixed />);
    expect(container.querySelector('.sidenav-fixed')).toBeTruthy();
  });

  test('is `fixed` if no trigger is passed', () => {
    const { container } = render(<SideNav />);
    expect(container.querySelector('.sidenav-fixed')).toBeTruthy();
  });

  test('passes id to ul', () => {
    const { container } = render(<SideNav trigger={trigger} id="test" />);
    expect(container.querySelector('ul#test')).toBeTruthy();
  });

  test('renders children', () => {
    const { container } = render(
      <SideNav trigger={trigger}>
        <span className="test-child" />
      </SideNav>
    );

    expect(container.querySelector('ul > .test-child')).toBeTruthy();
  });

  describe('js init', () => {
    test('should call sideNav with the given options', () => {
      const options = {
        draggable: true,
        edge: 'right'
      };
      render(<SideNav trigger={trigger} options={options} />);

      expect(sideNavInitMock).toBeCalledWith(options);
    });

    test('should be destroyed when unmounted', () => {
      const { unmount } = render(<SideNav />);
      unmount();

      expect(sideNavInstanceDestroyMock).toBeCalled();
    });
  });
});
