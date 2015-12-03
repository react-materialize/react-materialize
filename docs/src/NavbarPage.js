import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import iconLinksNavbar from '../../examples/IconLinksNavbar';
import leftAlignedNavbar from '../../examples/LeftAlignedNavbar';
import rightAlignedNavbar from '../../examples/RightAlignedNavbar';

const component = 'Navbar';

class NavbarPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.
          </p>
          <h4 className='col s12'>
            Right Aligned Links
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.rightAlignedNavbar }>
              { rightAlignedNavbar }
            </ReactPlayground>
          </Col>

          <h4 className='col s12'>
            Left Aligned Links
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.leftAlignedNavbar }>
              { leftAlignedNavbar }
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Icon Links
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.iconLinksNavbar }>
              { iconLinksNavbar }
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
export default NavbarPage;
