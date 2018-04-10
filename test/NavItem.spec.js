import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../src/NavItem';

describe('<NavItem />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<NavItem href="get-started.html">Getting</NavItem>);

    expect(wrapper).toMatchSnapshot();
  });

  test('passes className to first node', () => {
    wrapper = shallow(
      <NavItem className="red" href="get-started.html">
        Getting
      </NavItem>
    );

    expect(wrapper.find('li.red')).toHaveLength(1);
  });

  test('passes node as a child', () => {
    wrapper = shallow(
      <NavItem href="get-started.html">
        <p>Go Home</p>
      </NavItem>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('can be a divider', () => {
    wrapper = shallow(<NavItem divider />);

    expect(wrapper.find('li.divider')).toHaveLength(1);
  });

  test('handles multiple childs', () => {
    wrapper = shallow(
      <NavItem href="get-started.html">
        <span>hello</span>
        <h2>World</h2>
      </NavItem>
    );

    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('passes onClick as parameter', () => {
    const onClick = jest.fn();
    wrapper = shallow(
      <NavItem onClick={onClick} href="get-started.html">
        Getting
      </NavItem>
    );

    expect(wrapper).toMatchSnapshot();

    wrapper
      .children()
      .at(0)
      .simulate('click');

    expect(onClick).toHaveBeenCalled();

    expect(
      wrapper
        .children()
        .at(0)
        .prop('href')
    ).toBeUndefined();
  });

  test('passes href as parameter', () => {
    wrapper = shallow(<NavItem href="get-started.html">Getting</NavItem>);

    expect(wrapper).toMatchSnapshot();
  });
});
