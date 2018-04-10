import React from 'react';
import { shallow } from 'enzyme';
import Container from '../src/Container';

describe('<Container />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    wrapper = shallow(
      <Container>
        <p>yes</p>
      </Container>
    );
    expect(
      wrapper
        .find('.container')
        .children()
        .type()
    ).toEqual('p');
  });
});
