import React from 'react';
import Col from '../src/Col';
import Row from '../src/Row';

export default {
  title: 'CSS/Grid',
  component: Row,
  parameters: {
    docs: {
      description: {
        component:
          'We are using a standard 12 column fluid responsive grid system. The grid helps you layout your page in an ordered, easy fashion.'
      }
    }
  }
};

export const Default = {
  name: 'default',
  render: () => (
    <Row>
      <Col s={1} className="teal white-text">
        1
      </Col>
      <Col s={1} className="teal white-text">
        2
      </Col>
      <Col s={1} className="teal white-text">
        3
      </Col>
      <Col s={1} className="teal white-text">
        4
      </Col>
      <Col s={1} className="teal white-text">
        5
      </Col>
      <Col s={1} className="teal white-text">
        6
      </Col>
      <Col s={1} className="teal white-text">
        7
      </Col>
      <Col s={1} className="teal white-text">
        8
      </Col>
      <Col s={1} className="teal white-text">
        9
      </Col>
      <Col s={1} className="teal white-text">
        10
      </Col>
      <Col s={1} className="teal white-text">
        11
      </Col>
      <Col s={1} className="teal white-text">
        12
      </Col>
    </Row>
  )
};
