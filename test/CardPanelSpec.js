/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import CardPanel from '../src/CardPanel';

const modifier = 'blue-grey';

const wrapper = shallow(
  <CardPanel className={modifier}>I am a very simple card</CardPanel>
);

describe('<CardPanel />', () => {
  test('should render', () => {
    assert(wrapper.find('.card-panel').length, 'with a card-panel className');
  });

  test('accepts className prop', () => {
    assert(wrapper.hasClass(modifier), 'with a modifier');
  });
});
