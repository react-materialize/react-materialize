import React from 'react';

import Slide from '../../src/Slide';
import SlideCaption from '../../src/SlideCaption';
import Slider from '../../src/Slider';

export default
<Slider>
    <Slide src="http://lorempixel.com/580/250/nature/1">
        <SlideCaption title="This is our big Tagline!">Here's our small slogan.</SlideCaption>
    </Slide>
    <Slide src="http://lorempixel.com/580/250/nature/2">
        <SlideCaption title="Left aligned Caption" placement="left">Here's our small slogan.</SlideCaption>
    </Slide>
    <Slide src="http://lorempixel.com/580/250/nature/3">
        <SlideCaption title="Right aligned Caption" placement="right">Here's our small slogan.</SlideCaption>
    </Slide>
</Slider>;
