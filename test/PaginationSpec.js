/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Pagination from '../src/Pagination';

let wrapper = shallow(
  <Pagination items={10} activePage={2} maxButtons={6} />
);

describe('<Pagination />', () => {
  it('should render', () => {
    assert(wrapper.find('.pagination').length);
  });

  it('has items', () => {
    assert.strictEqual(wrapper.children().length, 8);
  });

  it('accets active prop', () => {
    assert(wrapper.childAt(2).props().active);
  });

  it('accets active prop', () => {
    wrapper.setState({ activePage: 4 });
    assert(wrapper.childAt(4).props().active);
  });
});
