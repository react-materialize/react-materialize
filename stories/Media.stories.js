import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaBox from '../src/MediaBox';
import Slider from '../src/Slider';
import Slide from '../src/Slide';
import Caption from '../src/Caption';

const stories = storiesOf('Javascript|Media', module);

stories.addParameters({
  info: {
    text: `Media components include things that have to do with large media objects like Images, Video, Audio, etc.`
  }
});

stories.add('Default', () => (
  <MediaBox
    src="https://lorempixel.com/350/350/nature/1"
    caption="A demo media box1"
  />
));

stories.add('Slider', () => (
  <Slider>
    <Slide image={<img src="http://lorempixel.com/780/580/nature/1" alt="" />}>
      <Caption>
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img src="http://lorempixel.com/780/580/nature/2" alt="" />}>
      <Caption placement="left">
        <h3>Left Aligned Caption</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img src="https://lorempixel.com/780/580/nature/3" alt="" />}>
      <Caption placement="right">
        <h3>Right Aligned Caption</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img src="https://lorempixel.com/580/250/nature/4" alt="" />}>
      <Caption>
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
  </Slider>
));
