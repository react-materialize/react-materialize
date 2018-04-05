/* global describe, it */

import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';
import { stub } from 'sinon';

let wrapper = shallow(
  <Dropdown trigger={<Button>Drop me!</Button>} className="more" />
);

describe('<Dropdown />', () => {
  test('renders a dropdown', () => {
    assert.toBeTruthy();
  });

  test('accepts classname as a prop', () => {
    assert.toBeTruthy();
  });

  test('passed `constrainWidth` correctly', () => {
    const dropdownStub = stub($.fn, 'dropdown');
    const options = { constrainWidth: true };
    mount(<Dropdown trigger={<span />} options={options} />);
    assert.equal(dropdownStub.withArgs(options).calledOnce, true);
  });

  test("doesn't pass down unwanted props", () => {
    const options = { hover: true };
    let wrapper = shallow(
      <Dropdown trigger={<span>hi</span>} options={options} />
    );
    assert.isNotOk(wrapper.find('ul').prop('options'));
  });

  test('renders the correct output', () => {
    const output = `<ul class="dropdown-content more" id="dropdown_1"></ul>`;
    assert.equal(wrapper.find('ul').html(), output);
  });

  test('does not update ID reference with each render', () => {
    const wrapper = new Dropdown({ trigger: <option>hi</option> });
    wrapper.render();
    const firstId = wrapper.idx;
    wrapper.render();
    const secondId = wrapper.idx;
    assert.equal(firstId, secondId);
  });
});
