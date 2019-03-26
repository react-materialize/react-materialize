import React from 'react';
import { storiesOf } from '@storybook/react';
import Parallax from '../src/Parallax';

const stories = storiesOf('javascript|Parallax', module);

stories.addParameters({
  info: {
    text: `Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.`
  }
});

stories.add('Default', () => (
  <div>
    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
    <div className="section white">
      <div className="row container">
        <h2 className="header">Parallax</h2>
        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
  </div>
));
