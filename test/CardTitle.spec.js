import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import CardTitle from '../src/CardTitle';

let wrapper = shallow(<CardTitle image="">I am a very simple card</CardTitle>);

describe('<CardTitle />', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  wrapper = shallow(
    <CardTitle image="" reveal>
      I am a very simple card
    </CardTitle>
  );

  test('requires an image prop', () => {
    assert(wrapper.find('img.activator').length, 'with a truthy value');
  });
});
