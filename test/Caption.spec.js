import React from 'react';
import { shallow } from 'enzyme';
import Caption from '../src/Caption';

describe('<Caption />', () => {
  let wrapper = shallow(
    <Caption placement="left">
      <h3>This is our big Tagline!</h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  );

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
