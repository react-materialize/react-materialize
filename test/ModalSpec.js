/* global describe, it, expect */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert } from 'chai';
import Modal from '../src/Modal';

let triggerClass = 'btn';
let trigger = <button className={triggerClass}>modal</button>;
let wrapper = mount(
  <Modal
    header='Header'
    trigger={trigger}>
    <p>Lorem ipsum dolor sit amet</p>
  </Modal>
);

describe('<Modal />', () => {
  it('renders a trigger', () => {
    wrapper = shallow(
      <Modal trigger={trigger} />
    );
    assert.ok(wrapper.contains(trigger), 'should contain a trigger');
  });
});
