/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/Card';

const wrapper = shallow(
  <Card title='card title' className='blue-grey darken-1' textClassName='white-text'>
    I am a very simple card
  </Card>
);

describe('<Card />', () => {
  it('should have classname card', () => {
    expect(wrapper.find('.card')).to.have.length(1);
  });

  it('should append classnames to container', () => {
    expect(wrapper.find('.blue-grey')).to.have.length(1);
    expect(wrapper.find('.darken-1')).to.have.length(1);
  });

  it('should append text classnames to content', () => {
    expect(wrapper.find('.card-content').hasClass('white-text')).to.equal(true);
  });
});

const wrapperHorizontal = shallow(
  <Card horizontal title='card title' className='blue-grey darken-1' textClassName='white-text'>
    I am a horizontal card
  </Card>
);

describe('<Card horizontal />', () => {
  it('should have classname horizontal', () => {
    expect(wrapperHorizontal.find('.horizontal')).to.have.length(1);
  });
  it('should have classname card-stacked', () => {
    expect(wrapperHorizontal.find('.card-stacked')).to.have.length(1);
  });
});
