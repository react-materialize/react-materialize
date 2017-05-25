import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import preloaderCircular from '../../../examples/PreloaderCircular';
import progressBars from '../../../examples/ProgressBars';
import PreloaderCode from '!raw-loader!Preloader';
import ProgressBarCode from '!raw-loader!ProgressBar';

const PreloaderPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        If you have content that will take a long time to load,
        you should give the user feedback.
        For this reason we provide a number activity + progress indicators.
      </p>

      <h4 className='col s12'>
        Progress Bar
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.progressBars}>
          {progressBars}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Circular
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.preloaderCircular}>
          {preloaderCircular}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable component={ProgressBarCode} header='ProgressBar' />
        <PropTable component={PreloaderCode} header='Preloader' />
      </Col>
    </Col>
  </Row>
);

export default PreloaderPage;
