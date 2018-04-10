import React from 'react';
import { shallow, mount } from 'enzyme';
import Pagination from '../src/Pagination';

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

  test('accepts active prop', () => {
    wrapper.setState({ activePage: 4 });
    expect(wrapper).toMatchSnapshot();
  });

  test("doesn't update state with wrong activePage prop", () => {
    wrapper = shallow(<Pagination items={1} activePage={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('updates state with passed activePage prop', () => {
    const newActive = 5;
    wrapper = mount(<Pagination items={10} activePage={2} />);
    wrapper.setProps({ activePage: newActive });

    expect(wrapper.state().activePage).toEqual(newActive);
  });
});
