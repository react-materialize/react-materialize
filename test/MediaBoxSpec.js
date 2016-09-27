/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import MediaBox from '../src/MediaBox';

const wrapper = shallow(
  <MediaBox className='more' src='image.jpg' caption='A demo media box1' width='650' />
);

describe('<MediaBox />', () => {
  it('renders', () => {
    assert(wrapper.find('img.materialboxed.more').length);
  });

  it('passes props', () => {
    assert.strictEqual(wrapper.props().width, '650', 'width');
    assert.strictEqual(wrapper.props()['data-caption'], 'A demo media box1', 'caption');
    assert.strictEqual(wrapper.props().src, 'image.jpg', 'image');
  });
});
