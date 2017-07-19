import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import CarouselCode from '!raw-loader!Carousel';

const header = 'Carousel';
const desc = `Our Carousel is a robust and versatile component that can be an image slider,
  to an item carousel, to an onboarding experience.
  It is touch enabled making it especially smooth to use on mobile.`;

const CarouselPage = () => (
  <Row>
    <Col s={12} l={10}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4 className='col s12'>Image Carousel</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CarouselBasic.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Full Width Slider</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CarouselFullWidth.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Full Width Slider with Fixed Item</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CarouselFullWidthFixedItem.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Content Carousel</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CarouselContent.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={CarouselCode} />
      </Section>
    </Col>
  </Row>
);

export default CarouselPage;
