import React from 'react';
import Row from '../src/Row';
import Col from '../src/Col';
import ProgressBar from '../src/ProgressBar';

export default
<Row>
  <Col s={12}>
    <ProgressBar progress={70}/>
  </Col>
  <Col s={12}>
    <ProgressBar />
  </Col>
</Row>;
