import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../src/Badge';

describe('<Badge />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Badge>4</Badge>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should output a badge with the className of `badge`', () => {
    wrapper = shallow(<Badge>4</Badge>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should output a badge with the className of `badge new` and', () => {
    wrapper = shallow(<Badge newIcon>3</Badge>);
    expect(wrapper).toMatchSnapshot();
  });
});
