/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Pagination from '../src/Pagination';

let wrapper = shallow(<Pagination />);
let items = 10;
let activePage = 4;

describe('<Pagination />', () => {
  it('renders without exploding', () => {
    assert.ok(wrapper.find('.pagination').length,
      'renders a pagination');
  });

  it('renders with default values', () => {
    assert.strictEqual(wrapper.find('.pagination').children().length, 12,
      'should contain 10 pages plus 2 arrows');
  });

  it('renders accepts values', () => {
    wrapper = shallow(<Pagination items={items} activePage={activePage} />);
    const elements = wrapper.find('.pagination').children();
    assert.strictEqual(elements.at(activePage).props().active, true,
      'active page should have prop active'
    );
  });

  it('should handle wrong values', () => {
    wrapper = shallow(<Pagination items={4} activePage={10} />);
    const elements = wrapper.find('.pagination').children();
    assert.strictEqual(elements.at(1).props().active, true,
      'active page should never be more than the items'
    );
  });

  it('should not require activePage', () => {
    wrapper = shallow(<Pagination items={3} />);
    const elements = wrapper.find('.pagination').children();
    assert.strictEqual(elements.at(1).props().active, true,
      'active page should be the first page by default'
    );
  });

  it('should not require items', () => {
    wrapper = shallow(<Pagination activePage={3} />);
    const elements = wrapper.find('.pagination').children();
    assert.strictEqual(elements.at(3).props().active, true,
      'active page should be applied to 10 default items'
    );
  });
});
