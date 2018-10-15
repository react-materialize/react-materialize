import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../src/Breadcrumb';

describe('<Breadcrumb />', () => {
  test('renders', () => {
    const wrapper = (
      <Breadcrumb cols={6} className="blue">
        <a href="#">Home</a>
        <a href="#">Login</a>
      </Breadcrumb>
    );
    expect(shallow(wrapper)).toMatchSnapshot();
  });
});
