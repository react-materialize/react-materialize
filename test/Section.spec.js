import React from 'react';
import { mount } from 'enzyme';
import Section from '../src/Section';

describe('<Section />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = mount(<Section />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    wrapper = mount(
      <Section>
        <p>nope</p>
      </Section>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
