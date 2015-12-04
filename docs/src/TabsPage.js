import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import tab from '../../examples/Tab';

class TabsPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Tabs');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            The tabs structure consists of an unordered list of tabs that
            have hashes corresponding to tab ids. Then when you click on each tab,
            only the container with the corresponding tab id will become visible.
            You can add the class .disabled to make a tab inaccessible.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.tab }>
              {tab}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='Tab'/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default TabsPage;
