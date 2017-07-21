/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Tooltip from '../src/Tooltip';

function setup (props = {}) {
  const propsIn = {
    ...props
  };
  const component = <Tooltip {...propsIn}><button className='btn'>test</button></Tooltip>;
  const wrapper = shallow(component);
  const propsOut = wrapper.props();
  return {
    propsIn,
    wrapper,
    propsOut
  };
}

describe('Tooltip', () => {
  it('should contain class tooltipped', () => {
    const { wrapper } = setup({ tooltip: '123' });
    assert.ok(wrapper.hasClass('tooltipped'));
  });

  it('should convert into child node', () => {
    const { wrapper } = setup({ tooltip: '123' });
    assert.ok(wrapper.find('button').length);
  });

  it('should contain child classes', () => {
    const { wrapper } = setup({ tooltip: '123' });
    assert.ok(wrapper.find('button').hasClass('btn'));
  });

  it('should contains correct props and transfer into corresponding data-*', () => {
    const { propsOut } = setup({
      tooltip: 'test123',
      delay: 123,
      position: 'top',
      html: true
    });
    assert.equal(propsOut['data-tooltip'], 'test123', 'should have a matching content');
    assert.equal(propsOut['data-delay'], 123, 'should have a matching delay time');
    assert.equal(propsOut['data-position'], 'top', 'should have a matching position');
    assert.equal(propsOut['data-html'], true, 'should have a matching html configuration');
  });

  it('renders the correct output', () => {
    const { wrapper } = setup({ tooltip: '123' });
    let output = `<button class="btn tooltipped" data-tooltip="123" data-delay="350" data-position="bottom" data-html="false">test</button>`;
    assert.equal(wrapper.find('button').html(), output);
  });
});
