import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../src/Footer';

let moreLinks = (
  <a className="grey-text text-lighten-4 right" href="#!">
    More Links
  </a>
);
let links = (
  <ul>
    <li>
      <a className="grey-text text-lighten-3" href="#!">
        Link 1
      </a>
    </li>
  </ul>
);
let wrapper = shallow(
  <Footer
    moreLinks={moreLinks}
    copyrights="&copy; 2015 Copyright Text"
    links={links}
  >
    <p>Footer Content</p>
  </Footer>
);

describe('<Footer />', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
