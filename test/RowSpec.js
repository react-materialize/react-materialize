/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Row from '../src/Row';

let wrapper = shallow(
  <Row />
);

describe('<Row />', () => {
  it('should render', () => {
    assert(wrapper.find('.row').length, 'a row');
  });
});
