/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import CardTitle from '../src/CardTitle';

let wrapper = shallow(
  <CardTitle image=''>
    I am a very simple card
  </CardTitle>
);

describe('<CardTitle />', () => {
  it('should render', () => {
    assert(wrapper.find('.card-title').length, 'with a card-title className');
  });

  wrapper = shallow(
    <CardTitle image='' reveal>
      I am a very simple card
    </CardTitle>
  );

  it('requires an image prop', () => {
    assert(wrapper.find('img.activator').length, 'with a truthy value');
  });
});
