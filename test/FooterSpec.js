/* global describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Footer from '../src/Footer';

let moreLinks = <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>;
let links =
  <ul>
    <li><a className='grey-text text-lighten-3' href='#!'>Link 1</a></li>
  </ul>;
let wrapper = shallow(
  <Footer
    moreLinks={moreLinks}
    copyrights='&copy; 2015 Copyright Text'
    links={links}
  >
    <p>Footer Content</p>
  </Footer>
);

describe('<Footer />', () => {
  it('renders a Footer', () => {
    assert(wrapper.find('.container').length, 'with a container');
    assert(wrapper.find('.footer-copyright').length, 'with a copyright');
  });
});
