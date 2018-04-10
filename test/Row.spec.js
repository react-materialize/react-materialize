import React from 'react';
import { shallow } from 'enzyme';
import Row from '../src/Row';

describe('<Row />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts a node prop', () => {
    const node = 'a';
    wrapper = shallow(<Row node={node} />);
    expect(wrapper.type()).toEqual(node);
  });

  test('passes other props to node', () => {
    const style = { color: 'red' };
    wrapper = shallow(<Row style={style} />);
    expect(wrapper.prop('style')).toEqual(style);
  });
});
