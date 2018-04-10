import React from 'react';
import { shallow } from 'enzyme';
import CardPanel from '../src/CardPanel';

const modifier = 'blue-grey';

describe('<CardPanel />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardPanel className={modifier}>I am a very simple card</CardPanel>
    );
  });

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render', () => {
    expect(wrapper.find('.card-panel')).toHaveLength(1);
  });

  test('accepts className prop', () => {
    expect(wrapper.hasClass(modifier)).toBeTruthy();
  });
});
