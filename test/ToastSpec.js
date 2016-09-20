/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Toast from '../src/Toast';

let wrapper = shallow(
  <Toast toast='Yo!' rounded>Sup</Toast>
);

describe('<Toast />', () => {
  it('should render', () => {
    assert(wrapper.find('button.toast').length);
  });
});
