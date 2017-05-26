import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import pagination from '../../../examples/Pagination';
import PaginationCode from '!raw-loader!Pagination';
import PaginationButtonCode from '!raw-loader!PaginationButton';

const PaginationPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Add pagination links to help split up your long content into shorter, easier to understand blocks.
        You just have to provide the items and onSelect attribute, when clicked,
        the onSelect function will be called with the page number.
        Otherwise you can customize the page button with PaginationButton component.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.pagination}>
          {pagination}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable component={PaginationCode} header='Pagination' />
        <PropTable component={PaginationButtonCode} header='PaginationButton' />
      </Col>
    </Col>
  </Row>
);

export default PaginationPage;
