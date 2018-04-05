/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Row from '../src/Row';

let wrapper;

describe('<Row />', () => {
  test('renders', () => {
    wrapper = shallow(<Row />);
    expect(wrapper.hasClass('row')).to.be.truthy;
  });

  test('accepts a node prop', () => {
    const node = 'a';
    wrapper = shallow(<Row node={node} />);
    expect(wrapper.type()).to.eq(node);
  });

  test('passes other props to node', () => {
    const style = { color: 'red' };
    wrapper = shallow(<Row style={style} />);
    expect(wrapper.prop('style')).toBe(style);
  });
});
