import React from 'react';
import Col from '../src/Col';
import Preloader from '../src/Preloader';
import Row from '../src/Row';

export default {
  title: 'Components/Preloader',
  component: Preloader,
  parameters: {
    docs: {
      description: {
        component:
          'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.'
      }
    }
  }
};

export const Default = {
  render: () => (
    <Row>
      <Col s={4}>
        <Preloader size="big" />
      </Col>
      <Col s={4}>
        <Preloader flashing />
      </Col>
      <Col s={4}>
        <Preloader size="small" />
      </Col>
    </Row>
  )
};
