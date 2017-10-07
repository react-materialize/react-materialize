/* global describe, it */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import SideNav from '../src/SideNav';
import Button from '../src/Button';

function setup (props = {}, children, mounted) {
  const propsIn = {
    trigger: <Button className='trigger'>Show sidenav</Button>,
    ...props
  };
  const component = <SideNav {...propsIn}>{children}</SideNav>;
  const wrapper = mounted ? mount(component) : shallow(component);
  const sideNav = wrapper.find('.side-nav');
  const trigger = wrapper.find('.trigger');
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
  it('should render', () => {
    const { sideNav, trigger, sideNavProps, triggerProps } = setup();
    assert(sideNav.length === 1, 'should render a sidenav');
    assert(trigger.length === 1, 'should render a default trigger');
    assert.match(sideNavProps.id, /^sidenav_/, 'should generate an id');
    assert.equal(triggerProps['data-activates'], sideNavProps.id, 'should have a matching trigger');
  });

  it('should render a given id', () => {
    const { sideNavProps, triggerProps } = setup({ id: 'test' });
    assert.equal(sideNavProps.id, 'test');
    assert.equal(triggerProps['data-activates'], 'test', 'should have a matching trigger');
  });

  it('should render children', () => {
    const { sideNav } = setup({}, <span className='test-child' />);
    const children = sideNav.find('.test-child');
    assert(children.length === 1, 'renders children');
  });

  it('should consume props it uses', () => {
    const { sideNavProps } = setup({
      id: 'test123',
      options: {},
      shouldTransfer: 'true'
    });
    assert.isUndefined(sideNavProps.trigger, 'should not transfer trigger');
    assert.isUndefined(sideNavProps.options, 'should not transfer options');
    assert.equal(sideNavProps.shouldTransfer, 'true');
  });
});
