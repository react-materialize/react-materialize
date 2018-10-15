import React from 'react';
import { shallow } from 'enzyme';
import Preloader from '../src/Preloader';

describe('<Preloader />', () => {
  test('should render a Preloader', () => {
    const wrapper = shallow(
      <Preloader
        className="find"
        size="big"
        active={false}
        color="red"
        flashing
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render a Preloader with default properties', () => {
    const wrapper = shallow(<Preloader />);

    expect(wrapper).toMatchSnapshot();
  });
});
