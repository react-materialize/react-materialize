/* global describe, it */

import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';
import { stub } from 'sinon';

let wrapper = shallow(
  <Dropdown trigger={<Button>Drop me!</Button>} className='more' />
);

describe('<Dropdown />', () => {
  it('renders a dropdown', () => {
    assert.ok(wrapper.find('.dropdown-content.more').length);
  });

  it('accepts classname as a prop', () => {
    assert.ok(wrapper.find('.dropdown-content').hasClass('more'));
  });

  it('passed `constrainWidth` correctly', () => {
    const dropdownStub = stub($.fn, 'dropdown');
    const options = { constrainWidth: true };
    mount(
      (<Dropdown trigger={<span />} options={options} />)
    );
    assert.equal(dropdownStub.withArgs(options).calledOnce, true);
  });

  it('doesn\'t pass down unwanted props', () => {
    const options = { hover: true };
    let wrapper = shallow(
      <Dropdown trigger={<span>hi</span>} options={options} />
    );
    assert.isNotOk(wrapper.find('ul').prop('options'));
  });

  it('renders the correct output', () => {
    const output = `<ul class="dropdown-content more" id="dropdown_1"></ul>`;
    assert.equal(wrapper.find('ul').html(), output);
  });

  it('does not update ID reference with each render', () => {
    const wrapper = new Dropdown({ trigger: (<option>hi</option>) });
    wrapper.render();
    const firstId = wrapper.idx;
    wrapper.render();
    const secondId = wrapper.idx;
    assert.equal(firstId, secondId);
  });
});
