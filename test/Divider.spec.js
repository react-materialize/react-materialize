import React from 'react';
import { shallow } from 'enzyme';
import Divider from '../src/Divider';

let wrapper;

describe('<Divider />', () => {
  test('renders', () => {
    wrapper = shallow(<Divider />);
    expect(wrapper).toMatchSnapshot();
  });

  test('does not contain children', () => {
    wrapper = shallow(
      <Divider>
        <p>nope</p>
      </Divider>
    );
    expect(wrapper.find('.divider').children().length).toEqual(0);
  });
});
