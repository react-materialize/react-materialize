import React from 'react';
import { shallow, mount } from 'enzyme';
import SideNav from '../src/SideNav';
import mocker from './helper/new-mocker';

describe('<SideNav />', () => {
  let wrapper;
  const sideNavInitMock = jest.fn();
  const sideNavInstanceDestroyMock = jest.fn();
  const sideNavMock = {
    init: (el, options) => {
      sideNavInitMock(options);
      return {
        destroy: sideNavInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Sidenav', sideNavMock);
  const trigger = <button className="trigger">Show sidenav</button>;

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(<SideNav trigger={trigger} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('can be `fixed`', () => {
    wrapper = shallow(<SideNav trigger={trigger} fixed />);
    expect(wrapper).toMatchSnapshot();
  });

  test('is `fixed` if no trigger is passed', () => {
    wrapper = shallow(<SideNav />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders', () => {
    wrapper = shallow(<SideNav trigger={trigger} id="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    wrapper = shallow(
      <SideNav trigger={trigger}>
        <span className="test-child" />
      </SideNav>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should call sideNav with the given options', () => {
    const options = {
      closeOnClick: true,
      edge: 'right'
    };
    mount(<SideNav trigger={trigger} options={options} />);

    expect(sideNavInitMock).toHaveBeenCalledWith(options);
  });

  test('should be destroyed when unmounted', () => {
    const component = shallow(<SideNav />);
    component.unmount();

    expect(sideNavInstanceDestroyMock).toHaveBeenCalled();
  });
});
