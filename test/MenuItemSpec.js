/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import MenuItem from '../src/MenuItem';

let wrapper = shallow(
  <MenuItem className='more' breadcrumbItem href='/' />
);

describe('<MenuItem />', () => {
  it('should render a link with the className of `breadcrumbItem more`', () => {
    assert(wrapper.find('a.breadcrumb.more').length);
  });

  it('should render a href if provided', () => {
    assert.strictEqual(wrapper.props().href, '/');
  });
});
