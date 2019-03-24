import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../src/Icon';

describe('<Icon />', () => {
  let wrapper = shallow(<Icon>cloud</Icon>);

  test('renders an icon', () => {
    wrapper = shallow(<Icon>cloud</Icon>);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts size as a prop', () => {
    wrapper = shallow(<Icon large>cloud</Icon>);
    expect(wrapper).toMatchSnapshot();
  });
  test('accepts placement as a prop', () => {
    wrapper = shallow(<Icon left>cloud</Icon>);
    expect(wrapper).toMatchSnapshot();
  });
});
