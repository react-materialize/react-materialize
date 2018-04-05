import React from 'react';
import { shallow } from 'enzyme';
import Section from '../src/Section';

describe('<Section />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Section />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    wrapper = shallow(
      <Section>
        <p>nope</p>
      </Section>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
