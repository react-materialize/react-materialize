import React from 'react';
import Section from '../src/Section';
import Icon from '../src/Icon';
import Row from '../src/Row';
import Col from '../src/Col';

export default
<Section>
  <Row className='center'>
    <Col s={3}>
      <Icon tiny>insert_chart</Icon>
      <p>tiny</p>
    </Col>
    <Col s={3}>
      <Icon small>insert_chart</Icon>
      <p>small</p>
    </Col>
    <Col s={3}>
      <Icon medium>insert_chart</Icon>
      <p>medium</p>
    </Col>
    <Col s={3}>
      <Icon large>insert_chart</Icon>
      <p>large</p>
    </Col>
  </Row>
</Section>;
