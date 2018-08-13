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
        Submit Button
      </h4>
      <p className='col s12 caption'>
        When you use a button to submit a form, instead of using a input tag, use a button tag with a type submit
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.submitButton} />
      </Col>
      <h4 className='col s12'>
        Large Button
      </h4>
      <p className='col s12 caption'>
        This button has a larger height for buttons that need more attention.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.largeButton} />
      </Col>
      <h4 className='col s12'>
        Small Button
      </h4>
      <p className='col s12 caption'>
        When mouse and keyboard are the primary input methods, this smaller button is useful for denser UI layouts.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.smallButtom} />
      </Col>
      <h4 className='col s12'>
        Disabled Button
      </h4>
      <p className='col s12 caption'>
        This style can be applied to all button types
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.disabledButton} />
      </Col>
      <Col s={12}>
        <PropTable header='Buttons' component={ButtonCode} />
      </Col>
    </Col>
  </Row>
);

export default ButtonsPage;
