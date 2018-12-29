import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../src/Slide';

describe('<Slide />', () => {
  let wrapper = shallow(<Slide image={<img src="#" />} />);

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a Slide', () => {
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.childAt(0).prop('src')).toEqual('#');
  });

  test('can render a picture element', () => {
    const pictureTag = (
      <picture>
        <source srcSet="#" type="image/webp" />
        <source srcSet="#" type="image/jpg" />
        <img src="#" alt="" />
      </picture>
    );

    wrapper = shallow(<Slide image={pictureTag} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('can render a custom caption', () => {
    wrapper = shallow(
      <Slide image={<img src="#" />}>
        <h2>test</h2>
      </Slide>
    );
    expect(wrapper.childAt(1).is('h2')).toEqual(true);
  });
});
