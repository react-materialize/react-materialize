import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../src/Breadcrumb';

describe('<Breadcrumb />', () => {
  test('renders', () => {
    expect(shallow(<Breadcrumb />)).toMatchSnapshot();
  });
});
