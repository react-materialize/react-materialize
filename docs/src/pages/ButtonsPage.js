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

const ButtonsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
      </p>
      <h4 className='col s12'>
        Raised
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.raisedButton}>
          {raisedButton}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Floating
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.floatingButton}>
          {floatingButton}
        </ReactPlayground>
      </Col>
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
      <h4 className='col s12'>
        Button as Link
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.buttonAsLink}>
          {buttonAsLink}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Buttons' component={ButtonCode} />
      </Col>
    </Col>
  </Row>
);

export default ButtonsPage;
