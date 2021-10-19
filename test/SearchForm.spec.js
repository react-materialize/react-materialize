import React from 'react';
// import { shallow } from 'enzyme';
import SearchForm from '../src/SearchForm';

// let wrapper = shallow(<SearchForm />);

describe.skip('<SearchForm />', () => {
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
