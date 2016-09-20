/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Icon from '../src/Icon';

let wrapper = shallow(
  <Icon>cloud</Icon>
);

describe('<Icon />', () => {
  it('renders an icon', () => {
    assert(wrapper.find('i.material-icons').length, 'renders icon');
  });

  it('accepts size as a prop', () => {
    wrapper = shallow(<Icon large>cloud</Icon>);
    assert(wrapper.find('i.material-icons.large').length, 'icon large');
  });
});
