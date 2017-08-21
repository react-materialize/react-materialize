import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import CardCode from '!raw-loader!Card';

import imageCard from '../../../examples/CardImage';
import revealCard from '../../../examples/CardReveal';
import panelCard from '../../../examples/CardPanel';
import simpleCard from '../../../examples/CardSimple';
import horizontalCard from '../../../examples/CardHorizontal';

const CardsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.
      </p>
      <h4 className='col s12'>
        Basic Card
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.cardSimple}>
          {simpleCard}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Image Card
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.cardImage}>
          {imageCard}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Card Reveal
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.cardReveal}>
          {revealCard}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Card Panel
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.cardPanel}>
          {panelCard}
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Card Horizontal
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.cardHorizontal}>
          {horizontalCard}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header='Cards' component={CardCode} />
      </Col>
    </Col>
  </Row>
);

export default CardsPage;
