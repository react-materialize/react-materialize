import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import breadcrumbs from '../../../examples/Breadcrumbs';
import BreadcrumbsCode from '!raw-loader!Breadcrumb';

const header = 'Breadcrumbs';

const BreadcrumbsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.
      </p>
      <h4 className='col s12'>Basic</h4>
      <Col s={12}>
        <ReactPlayground code={Samples.breadcrumb}>
          {breadcrumbs}
        </ReactPlayground>
        <PropTable header={header} component={BreadcrumbsCode} />
      </Col>
    </Col>
  </Row>
);

export default BreadcrumbsPage;
