/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Badge from '../src/Badge';

let wrapper = shallow(<Badge>4</Badge>);

describe('<Badge />', () => {
  it('should output a badge with the className of `badge`', () => {
    assert(wrapper.find('.badge').length);
  });

  it('should output a badge with just the number 4 in it', () => {
    assert(wrapper.contains(<span className='badge'>4</span>));
  });

  it('should output a badge with the className of `badge new` and', () => {
    wrapper = shallow(<Badge newIcon>3</Badge>);
    assert(wrapper.find('.badge.new').length);
  });
});
