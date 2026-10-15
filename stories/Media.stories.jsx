import React from 'react';
import Caption from '../src/Caption';
import MediaBox from '../src/MediaBox';
import Slide from '../src/Slide';
import SliderComponent from '../src/Slider';

export default {
  title: 'Javascript/Media',
  component: MediaBox,
  subcomponents: { Slider: SliderComponent, Slide, Caption },
  parameters: {
    docs: {
      description: {
        component:
          'Media components include things that have to do with large media objects like Images, Video, Audio, etc.'
      }
    }
  }
};

export const MaterialBox = {
  name: 'Material Box',
  parameters: {
    docs: {
      description: {
        story:
          'Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged, Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.'
      }
    }
  },
  args: {
    children: (
      <img
        src="https://materializecss.com/images/sample-1.jpg"
        width="650"
        alt=""
      />
    )
  }
};

export const Slider = {
  parameters: {
    docs: {
      description: {
        story:
          'Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider.'
      }
    }
  },
  render: () => (
    <SliderComponent>
      <Slide
        image={
          <img src="https://picsum.photos/seed/rm-nature-1/780/580" alt="" />
        }
      >
        <Caption>
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
          </h5>
        </Caption>
      </Slide>
      <Slide
        image={
          <img src="https://picsum.photos/seed/rm-nature-2/780/580" alt="" />
        }
      >
        <Caption placement="left">
          <h3>Left Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
          </h5>
        </Caption>
      </Slide>
      <Slide
        image={
          <img src="https://picsum.photos/seed/rm-nature-3/780/580" alt="" />
        }
      >
        <Caption placement="right">
          <h3>Right Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
          </h5>
        </Caption>
      </Slide>
      <Slide
        image={
          <img src="https://picsum.photos/seed/rm-nature-4/580/250" alt="" />
        }
      >
        <Caption>
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
          </h5>
        </Caption>
      </Slide>
    </SliderComponent>
  )
};
