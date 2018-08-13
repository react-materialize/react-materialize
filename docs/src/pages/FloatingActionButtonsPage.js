import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import ButtonCode from '!raw-loader!Button';

import raisedButton from '../../../examples/RaisedButton';
import fixedActionButton from '../../../examples/FixedActionButton';
import floatingButton from '../../../examples/FloatingButton';
import horizontalFab from '../../../examples/HorizontalFAB';
import buttonAsLink from '../../../examples/ButtonAsLink';

const FloatingActionButtonsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.
      </p>
      <h4 className='col s12'>
        Fixed Action Button
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.fixedActionButton}>
          {fixedActionButton}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Horizontal FAB
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.horizontalFab}>
          {horizontalFab}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Buttons' component={ButtonCode} />
      </Col>
    </Col>
  </Row>
);

export default FloatingActionButtonsPage;
