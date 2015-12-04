import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import pagination from '../../examples/Pagination';

class PaginationPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Pagination');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Add pagination links to help split up your long content into shorter, easier to understand blocks.
            You just have to provide the items and onSelect attribute, when clicked,
            the onSelect function will be called with the page number.
            Otherwise you can customize the page button with PaginationButton component.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.pagination }>
              {pagination}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='Pagination'/>
            <PropTable component='PaginationButton'/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default PaginationPage;
