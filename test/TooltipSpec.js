/**
 * Created by madmax on 10.01.17.
 */
/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../src/Tooltip';

describe('<Tooltip />', () => {
  it('Renders correctly if there is only one child node', () => {
    shallow(<Tooltip tooltip='123'><div /></Tooltip>);
  });

  it('Renders child node with class tooltipped', () => {
    const wrapper = shallow(<Tooltip tooltip='123'><div /></Tooltip>);
    expect(wrapper.find('.tooltipped')).to.have.length(1);
  });

  it('Render itself as a modified child node', () => {
    const wrapper = shallow(<Tooltip tooltip='123'><div /></Tooltip>);

    expect(wrapper.is('div')).to.equal(true);
    expect(wrapper.equals(<div />)).to.equal(false);
  });

  it('Should transfer tooltip, delay, position props into the corresponding data-* equivs on the child node', () => {
    const tooltip = '123';
    const delay = 999;
    const position = 'left';

    const wrapper = shallow(<Tooltip tooltip={tooltip} delay={delay} position={position}><div /></Tooltip>);

    expect(wrapper.is('div')).to.equal(true);
    expect(wrapper.prop('data-tooltip')).to.equal(tooltip);
    expect(wrapper.prop('data-delay')).to.equal(delay);
    expect(wrapper.prop('data-position')).to.equal(position);
  });
});
