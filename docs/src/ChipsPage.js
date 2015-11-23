import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import chips from '../../examples/Chips';

const component = 'Chip';

class ChipsPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.chips }>
              {chips}
            </ReactPlayground>
          </Col>
          
          <Col s={12}>
            <PropTable component={component}/>
          </Col>
        </Col>
      </Row>
    );
  }
}
export default ChipsPage;
