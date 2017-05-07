import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import collapsible from './examples/Collapsible';
import CollapsibleCode from '!raw-loader!Collapsible';
import CollapsibleItemCode from '!raw-loader!Collapsible'; // TODO this should be CollapsibleItem

const CollapsiblesPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Collapsibles are accordion elements that expand when clicked on.
        They allow you to hide content that is not immediately relevant to the user.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.collapsible}>
          {collapsible}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Collapsible' component={CollapsibleCode} />
        <PropTable header='CollapsibleItem' component={CollapsibleItemCode} />
      </Col>
    </Col>
  </Row>
);

export default CollapsiblesPage;
