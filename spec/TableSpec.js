/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Table from '../src/Table';

const wrapper = shallow(
  <Table
    bordered
    centered
    hoverable
    responsive
    stripped
  >
    <tr>
      <td>foo</td>
      <td>bar</td>
    </tr>
  </Table>
);

describe('<Table />', () => {
  it('has various mod props', () => {
    assert(wrapper.find('.centered').length, 'adds a centered className');
    assert(wrapper.find('.stripped').length, 'adds a stripped className');
    assert(wrapper.find('.responsive-table').length, 'adds a responsive-table className');
    assert(wrapper.find('.bordered').length, 'adds a bordered className');
    assert(wrapper.find('.highlight').length, 'adds a highlight className');
  });
});
