import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../src/Row';
import Col from '../src/Col';
import ProgressBar from '../src/ProgressBar';
import Preloader from '../src/Preloader';

const stories = storiesOf('components/Preloader', module);

stories.addParameters({
  info: {
    text: `If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.`
  }
});

stories.add('Default', () => (
  <Row>
    <Col s={12}>
      <ProgressBar progress={70} />
    </Col>
    <Col s={12}>
      <ProgressBar />
    </Col>
  </Row>
));

stories.add('Circular', () => (
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
));
