import { mount, shallow } from 'enzyme';

import Pagination from '../src/Pagination';
import React from 'react';

describe('<Pagination />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pagination items={10} activePage={2} maxButtons={6} />);
  });

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('has items', () => {
    expect(wrapper.children()).toHaveLength(8);
  });

  test('accepts activePage prop', () => {
    expect(wrapper.childAt(2).props().active).toBeTruthy();
  });

  test("doesn't update state with wrong activePage prop", () => {
    wrapper = shallow(<Pagination items={1} activePage={2} />);
    expect(wrapper).toMatchSnapshot();
  });
});
