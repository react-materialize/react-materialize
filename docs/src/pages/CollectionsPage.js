import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import CollectionCode from '!raw-loader!Collection';
import CollectionItemCode from '!raw-loader!CollectionItem';

import collectionBasic from '../../../examples/CollectionBasic';
import collectionWithHeader from '../../../examples/CollectionWithHeader';
import collectionWithHref from '../../../examples/CollectionWithHref';

const CollectionsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Collections allow you to group list objects together.
      </p>
      <h4 className='col s12'>
        Basic
      </h4>

      <Col s={12}>
        <ReactPlayground code={Samples.collectionBasic}>
          { collectionBasic }
        </ReactPlayground>
      </Col>

      <h4 className='col s12'>
        Links
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.collectionWithHref}>
          { collectionWithHref }
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Headers
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.collectionWithHeader}>
          { collectionWithHeader }
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header='Collection' component={CollectionCode} />
      </Col>

      <Col s={12}>
        <PropTable header='CollectionItem' component={CollectionItemCode} />
      </Col>
    </Col>
  </Row>
);

export default CollectionsPage;
