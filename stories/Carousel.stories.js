import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../src/Carousel';

const stories = storiesOf('Javascript/Carousel', module);

stories.addParameters({
  info: {
    text: `Our Carousel is a robust and versatile component that can be 
    an image slider, to an item carousel, to an onboarding experience. 
    It is touch enabled making it especially smooth to use on mobile.`
  }
});

stories.add('Default', () => (
  <Carousel
    images={[
      'https://picsum.photos/200/300?image=0',
      'https://picsum.photos/200/300?image=1',
      'https://picsum.photos/200/300?image=2',
      'https://picsum.photos/200/300?image=3',
      'https://picsum.photos/200/300?image=4'
    ]}
  />
));

stories.add('fullscreen', () => (
  <Carousel
    options={{
      fullWidth: true,
      indicators: true
    }}
    images={[
      'https://picsum.photos/250/250?image=0',
      'https://picsum.photos/250/250?image=1',
      'https://picsum.photos/250/250?image=2',
      'https://picsum.photos/250/250?image=3',
      'https://picsum.photos/250/250?image=4'
    ]}
  />
));

stories.add('html content', () => (
  <Carousel
    options={{
      fullWidth: true,
      indicators: true
    }}
    className="white-text center"
  >
    <div className="red">
      <h2>First Panel</h2>
      <p>This is your first panel</p>
    </div>
    <div className="amber">
      <h2>Second Panel</h2>
      <p>This is your second panel</p>
    </div>
    <div className="green">
      <h2>Third Panel</h2>
      <p>This is your third panel</p>
    </div>
    <div className="blue">
      <h2>Fourth Panel</h2>
      <p>This is your fourth panel</p>
    </div>
  </Carousel>
));
