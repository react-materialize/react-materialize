import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import tableBorderless from '../../examples/BorderlessTable';

let component = 'Table';

class TablesPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible. In addition, to improve mobile experience, all tables on mobile-screen widths are centered automatically.
          </p>
          <h4 className='col s12'>
            Borderless Table
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.tableBorderless }>
              {tableBorderless}
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

export default TablesPage;
