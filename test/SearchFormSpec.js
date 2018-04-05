/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import SearchForm from '../src/SearchForm';

let wrapper = shallow(<SearchForm />);

describe('<SearchForm />', () => {
  test('should render', () => {
    assert(wrapper.find('form').length);
  });
});
