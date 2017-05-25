import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import tab from '../../../examples/Tab';
import tabCode from '!raw-loader!Tab';
import tabsCode from '!raw-loader!Tabs';

const TabsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        The tabs structure consists of an unordered list of tabs that
        have hashes corresponding to tab ids. Then when you click on each tab,
        only the container with the corresponding tab id will become visible.
        You can add the const .disabled to make a tab inaccessible.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.tab}>
          {tab}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable component={tabCode} header='Tab' />
        <PropTable component={tabsCode} header='Tabs' />
      </Col>
    </Col>
  </Row>
);

export default TabsPage;
