import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import collapsible from '../../examples/Collapsible';

class CollapsiblesPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Collapsible');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Collapsibles are accordion elements that expand when clicked on.
            They allow you to hide content that is not immediately relevant to the user.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.collapsible }>
              {collapsible}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='Collapsible'/>
            <PropTable component='CollapsibleItem'/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default CollapsiblesPage;
