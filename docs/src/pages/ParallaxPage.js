import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import parallax from '../../../examples/Parallax';
import parallaxCode from '!raw-loader!Parallax';

const ParallaxPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Parallax is an effect where the background content or image in this 
        case, is moved at a different speed than the foreground content while 
        scrolling. Check out the demo to get a better idea of it.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.parallax}>
          {parallax}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable component={parallaxCode} header='Parallax' />
      </Col>
    </Col>
  </Row>
);

export default ParallaxPage;
