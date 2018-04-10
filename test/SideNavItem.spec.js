import React from 'react';
import { shallow } from 'enzyme';
import SideNavItem from '../src/SideNavItem';

function setup(props = {}, children) {
  const propsIn = {
    ...props
  };
  const component = <SideNavItem {...propsIn}>{children}</SideNavItem>;
  const wrapper = shallow(component);
  const firstChild = wrapper.childAt(0);
  const propsOut = wrapper.props();
  return {
    propsIn,
    wrapper,
    firstChild,
    propsOut
  };
}

describe('<SideNavItem />', () => {
  test('renders', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render children', () => {
    const { wrapper } = setup({}, <span className="test-child" />);
    const children = wrapper.find('.test-child');
    expect(children).toHaveLength(1);
  });

  test('should not render children for a userview', () => {
    const { wrapper } = setup(
      { userView: true },
      <span className="test-child" />
    );
    const children = wrapper.find('.test-child');
    expect(children).toHaveLength(0);
  });

  test('should consume props it uses', () => {
    const { propsOut } = setup({
      id: 'test123',
      divider: true,
      waves: true,
      'data-someProp': 'true'
    });
    expect(propsOut.divider).toBeUndefined();
    expect(propsOut.waves).toBeUndefined();
    expect(propsOut.id).toEqual('test123');
    expect(propsOut['data-someProp']).toEqual('true');
  });

  test('should render a divider class when needed', () => {
    const { wrapper } = setup({ divider: true });
    expect(wrapper.hasClass('divider')).toBeTruthy();
  });

  test('should render a subheader or a waves-effect class when needed', () => {
    const { firstChild } = setup({
      waves: true,
      subheader: true
    });
    expect(firstChild).toMatchSnapshot();
  });

  test('should render an icon when needed', () => {
    const { firstChild } = setup({
      icon: 'car'
    });
    expect(firstChild).toMatchSnapshot();
  });

  test('should render a given href', () => {
    const { firstChild } = setup({
      href: 'www.test.nl'
    });
    expect(firstChild.props().href).toEqual('www.test.nl');
  });
});
