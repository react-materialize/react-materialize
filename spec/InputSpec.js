/* global describe, it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import Input from '../src/Input';
import Icon from '../src/Icon';

describe('<Input />', () => {
  let wrapper = shallow(<Input />);

  it('renders a text field by default', () => {
    expect(wrapper.find('.input-field')).to.have.length(1);
  });

  it('renders a textarea when type is textarea', () => {
    wrapper = shallow(<Input type='textarea' />);
    expect(wrapper.find('textarea')).to.have.length(1);
  });

  it('renders a select element when type is select', () => {
    wrapper = mount(
      <Input type='select' defaultValue='v'>
        <option value='v' />
        <option value='w' />
      </Input>);
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('renders an icon with prefix class name when icon prefix is used', () => {
    wrapper = mount(
      <Input type='text'><Icon>account_circle</Icon></Input>
    );
    expect(wrapper.find('i.prefix')).to.have.length(1);
  });

  it('renders an icon if icon prop is defined', () => {
    wrapper = shallow(
      <Input icon='cloud' />
    );
    expect(wrapper.find(Icon)).to.have.length(1);
  });

  it('renders placeholder as the default disabled option for select', () => {
    let defaultOption = 'Choose your option';
    wrapper = mount(
      <Input type='select' placeholder={defaultOption}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </Input>);
    expect(wrapper.find('option')).to.have.length(4);
  });

  it('renders a select with multiple', () => {
    let defaultOption = 'Choose your option';
    wrapper = mount(
      <Input type='select' multiple placeholder={defaultOption}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </Input>);
    expect(wrapper.find('select[multiple]')).to.have.length(1);
  });

  it('renders a switch with custom label', () => {
    const offLabel = 'No';
    wrapper = shallow(
      <Input type='switch' onLabel='Yes' offLabel={offLabel} />
    );
    expect(wrapper.childAt(0).childAt(0).contains(offLabel)).to.equal(true);
  });

  it('renders an input with a custom className', () => {
    const className = 'my-custom-class';
    wrapper = shallow(
      <Input className={className} />
    );
    assert.ok(wrapper.find('input').hasClass(className), `Didn't find ${className}`);
  });
});
