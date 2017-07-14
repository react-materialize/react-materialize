import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import CarouselCode from '!raw-loader!Carousel';

const header = 'Carousel';
const desc = `Our Carousel is a robust and versatile component that can be an image slider,
  to an item carousel, to an onboarding experience.
  It is touch enabled making it especially smooth to use on mobile.`;

const CarouselPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>{desc}</p>

      <h4 className='col s12'>Image Carousel</h4>
      <Col s={12}>
        <ReactPlayground code={Samples.carouselBasic} />
      </Col>

      <h4 className='col s12'>Full Width Slider</h4>
      <Col s={12}>
        <ReactPlayground code={Samples.carouselFullWidth} />
      </Col>

      <h4 className='col s12'>Content Carousel</h4>
      <Col s={12}>
        <ReactPlayground code={require('!raw-loader!../../../examples/CarouselContent.js')} />
      </Col>
      <Col s={12}>
        <PropTable header={header} component={CarouselCode} />
      </Col>
    </Col>
  </Row>
);

export default CarouselPage;
