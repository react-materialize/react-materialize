import React from 'react';
// import { shallow } from 'enzyme';
import UserView from '../src/UserView';

describe.skip('<UserView />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(
      <UserView>
        <p>hello</p>
      </UserView>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
