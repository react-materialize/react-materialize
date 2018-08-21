import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import toast from '../../../examples/Toast';
import toastCode from '!raw-loader!Toast';
const ToastPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className="caption">
        Materialize provides an easy way for you to send unobtrusive alerts to
        your users through toasts. These toasts are also placed and sized
        responsively, try it out by clicking the button below on
        different device sizes.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.toast} />
      </Col>
      <h5 className='col s12'>
        Programmatic use
      </h5>
      <Col s={12}>
        <ReactPlayground code={Samples.toastProgrammatically} />
      </Col>
      <Col s={12}>
        <PropTable header="Toast" component={toastCode} />
      </Col>
    </Col>
  </Row>
);

export default ToastPage;
