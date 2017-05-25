import React from 'react';
import Row from '../src/Row';
import Col from '../src/Col';
import Preloader from '../src/Preloader';

export default
<Row>
  <Col s={4}>
    <Preloader size='big'/>
  </Col>
  <Col s={4}>
    <Preloader flashing/>
  </Col>
  <Col s={4}>
    <Preloader size='small'/>
  </Col>
</Row>;
