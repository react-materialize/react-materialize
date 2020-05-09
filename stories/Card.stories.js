import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/Card';
import CardPanel from '../src/CardPanel';
import CardTitle from '../src/CardTitle';
import Col from '../src/Col';
import Row from '../src/Row';

const stories = storiesOf('Components/Card', module);

stories.addParameters({
  info: {
    text: `Cards are a convenient means of displaying content
    composed of different types of objects. They’re also
    well-suited for presenting similar objects whose size or
    supported actions can vary considerably, like photos with
    captions of variable length.`
  }
});

stories.addDecorator(story => (
  <Row>
    <Col m={6} s={12}>
      {story()}
    </Col>
  </Row>
));

stories.add('Default', () => (
  <Card
    className="blue-grey darken-1"
    textClassName="white-text"
    title="Card title"
    actions={[
      <a href="#" key="1">
        This is a link
      </a>,
      <a href="#" key="2">
        This is a link
      </a>
    ]}
  >
    I am a very simple card.
  </Card>
));

stories.add('Image', () => (
  <Card
    header={
      <CardTitle image="https://materializecss.com/images/sample-1.jpg">
        Card Title
      </CardTitle>
    }
    actions={[
      <a href="#" key="1">
        This is a Link
      </a>
    ]}
  >
    Here is the standard card with an image thumbnail.
  </Card>
));

stories.add('Horizontal', () => (
  <Card
    horizontal
    header={
      <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
    }
    actions={[
      <a href="#" key="1">
        This is a link
      </a>
    ]}
  >
    Here is the standard card with a horizontal image.
  </Card>
));

stories.add('Reveal', () => (
  <Card
    header={
      <CardTitle
        reveal
        image="https://materializecss.com/images/sample-1.jpg"
        waves="light"
      />
    }
    title="Card Title"
    reveal={
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    }
  >
    <p>
      <a href="#">This is a link</a>
    </p>
  </Card>
));

stories.add('Panel', () => (
  <CardPanel className="teal">
    <span className="white-text">
      For a simpler card with less markup, try using a card panel which just has
      padding and a shadow effect
    </span>
  </CardPanel>
));
