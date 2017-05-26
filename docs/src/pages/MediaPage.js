import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import mediaBox from '../../../examples/MediaBox';
import sliders from '../../../examples/Sliders';

import MediaBoxCode from '!raw-loader!MediaBox';
import SliderCode from '!raw-loader!Slider';
// import SlideCode from '!raw-loader!Slide';

const TablesPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Media components include things that have to do with large media objects like Images, Video, Audio, etc.
      </p>
      <h4 className='col s12'>
        Media Box
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.mediaBox}>
          {mediaBox}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Slider
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.sliders}>
          {sliders}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable component={MediaBoxCode} header='MediaBox' />
        <PropTable component={SliderCode} header='Slider' />
        {/*<PropTable component={SlideCode} header='Slide' />*/}
      </Col>
    </Col>
  </Row>
);

export default TablesPage;
