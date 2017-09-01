/* global describe, it */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';
import { spy, stub } from 'sinon';

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
    const options = { constrainWidth: true };
    const dropdown = spy();
    stub(global, '$', () => { return { dropdown }; });
    shallow(
      (<Dropdown trigger={<span />} options={options} />),
      { lifecycleExperimental: true }
    );
    assert.equal(dropdown.withArgs(options).calledOnce, true);
    global.$.restore();
  });

  it('doesn\'t pass down unwanted props', () => {
    let options = { hover: true };
    let wrapper = shallow(
      <Dropdown trigger={<span>hi</span>} options={options} />
    );
    assert.isNotOk(wrapper.find('ul').prop('options'));
  });

  it('renders the correct output', () => {
    let output = `<ul class="dropdown-content more" id="dropdown_0"></ul>`;
    assert.equal(wrapper.find('ul').html(), output);
  });
});
