
import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import sideNav from '../../examples/SideNavBasic';

const component = 'SideNav';

class SideNavPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            This is a slide out menu.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.sideNav }>
              {sideNav}
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
export default SideNavPage;
