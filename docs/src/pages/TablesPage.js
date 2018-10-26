import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import table from '../../../examples/Table';
import TableCode from '!raw-loader!Table';

const TablesPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible. In addition, to improve mobile experience, all tables on mobile-screen widths are centered automatically.
      </p>
      <h4 className='col s12'>
        Table
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.table}>
          {table}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Table' component={TableCode} />
      </Col>
    </Col>
  </Row>
);

export default TablesPage;
