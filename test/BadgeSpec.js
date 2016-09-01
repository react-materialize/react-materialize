/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../src/Badge';

const wrapper = shallow(<Badge>4</Badge>);

describe('<Badge />', () => {
  it('should output a badge with the className of `badge`', () => {
    expect(wrapper.find('.badge')).to.have.length(1);
  });

  it('should output a badge with just the number 4 in it', () => {
    expect(wrapper.contains(<span className='badge'>4</span>)).to.equal(true);
  });

  it('should output a badge with the className of `badge new` and', () => {
    const newBadge = shallow(<Badge newIcon>3</Badge>)
    expect(newBadge.find('.badge.new')).to.have.length(1);
  });
});
