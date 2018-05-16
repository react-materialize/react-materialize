import React from 'react';
import { shallow, mount } from 'enzyme';
import SideNav from '../src/SideNav';
import mocker from './helper/mocker';

function setup(props = {}, children, mounted) {
  const propsIn = {
    trigger: <button className="trigger">Show sidenav</button>,
    ...props
  };
  const component = <SideNav {...propsIn}>{children}</SideNav>;
  const wrapper = mounted ? mount(component) : shallow(component);
  const sideNav = wrapper.find('.sidenav');
  const trigger = wrapper.find('.sidenav-trigger');
  const sideNavProps = sideNav.props();
  const triggerProps = trigger.props();

  return {
    propsIn,
    wrapper,
    sideNav,
    trigger,
    sideNavProps,
    triggerProps
  };
}

describe('<SideNav />', () => {
  const sideNavMock = jest.fn();
  const restore = mocker('sidenav', sideNavMock);

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    const { sideNav } = setup();
    expect(sideNav).toMatchSnapshot();
  });

  test('can be `fixed`', () => {
    const { sideNav } = setup({ className: 'red', fixed: true });
    expect(sideNav).toMatchSnapshot();
  });

  test('should render fixed if not passed trigger or fixed', () => {
    const { wrapper } = setup({ className: 'red' });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render trigger on large screens not fixed`', () => {
    const { trigger } = setup({ className: 'green' });
    expect(trigger).toMatchSnapshot();
  });

  test('should be fixed if no trigger is passed', () => {
    const component = <SideNav className="red" />;
    const wrapper = shallow(component);
    const sideNav = wrapper.find('.sidenav');
    expect(sideNav).toMatchSnapshot();
  });

  test('should render a given id', () => {
    const { sideNavProps, triggerProps } = setup({ id: 'test' });
    expect(sideNavProps.id).toEqual('test');
    expect(triggerProps['data-target']).toEqual('test');
  });

  test('should render children', () => {
    const { sideNav } = setup({}, <span className="test-child" />);
    const children = sideNav.find('.test-child');

    expect(children).toHaveLength(1);
  });

  test('should consume props it uses', () => {
    const { sideNavProps } = setup({
      id: 'test123',
      options: {},
      shouldTransfer: true
    });

    expect(sideNavProps.trigger).toBeUndefined();
    expect(sideNavProps.options).toBeUndefined();
    expect(sideNavProps.shouldTransfer).toBeTruthy();
  });

  test('should call sideNav with the given options', () => {
    const options = {
      closeOnClick: true,
      edge: 'right'
    };
    mount(<SideNav trigger={<span>trigger</span>} options={options} />);
    expect(sideNavMock).toHaveBeenCalledWith(options);
  });
});
