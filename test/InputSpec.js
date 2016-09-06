/* global describe, it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';

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

  it('renders a switch with custom labels',  function() {
    let instance = TestUtils.renderIntoDocument(
        <Input type='switch'/>
      );

    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
    assert.include(ReactDOM.findDOMNode(input).type, 'checkbox');
  });
});
