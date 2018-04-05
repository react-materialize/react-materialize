import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
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
    assert(wrapper.find('.card-panel').length, 'with a card-panel className');
  });

  test('accepts className prop', () => {
    assert(wrapper.hasClass(modifier), 'with a modifier');
  });
});
