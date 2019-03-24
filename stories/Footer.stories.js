import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../src/Footer';

const stories = storiesOf('2. components/Footer', module);

stories.addParameters({
  info: {
    text: `Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once they have finished scrolling through the current page or are looking for additional information about your website.`
  }
});

stories.add('Default', () => (
  <Footer
    copyrights="&copy 2015 Copyright Text"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        More Links
      </a>
    }
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 1
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 2
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 3
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 4
          </a>
        </li>
      </ul>
    }
    className="example"
  >
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">
      You can use rows and columns here to organize your footer content.
    </p>
  </Footer>
));
