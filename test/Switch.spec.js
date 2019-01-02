import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../src/Switch';

describe('<Switch />', () => {
  test('renders', () => {
    const wrapper = <Switch offLabel="Off" onLabel="On" />;
    expect(shallow(wrapper)).toMatchSnapshot();
  });
});
