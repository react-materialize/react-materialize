var fs = require('fs'); // brfs bug
var path = require('path');
var React = require('react'),
    ReactPlayground = require('./ReactPlayground'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    Button = require('../../src/Button'),
    Icon = require('../../src/Icon'),
    Navbar = require('../../src/Navbar'),
    NavItem = require('../../src/NavItem'),
    Card = require('../../src/Card'),
    CardTitle = require('../../src/CardTitle'),
    Preloader = require('../../src/Preloader'),
    Collection = require('../../src/Collection'),
    CollectionItem = require('../../src/CollectionItem'),
    Collapsible = require('../../src/Collapsible'),
    CollapsibleItem = require('../../src/CollapsibleItem'),
    Toast = require('../../src/Toast'),
    Modal = require('../../src/Modal');


class ComponentsPage extends React.Component {
  render() {
    var raisedButtons = fs.readFileSync(path.join(__dirname, '../examples/RaisedButtons.js'), 'utf8');
    return (
      <Row>
        <Col m={9}>
          <h2 className='header'>Button</h2>
          <p className='caption'>
            There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
          </p>
          <div id='raised' className='section'>
            <h4 className='col s12'>
              Raised
            </h4>
            <Col s={12}>
              <ReactPlayground code={raisedButtons}>
                <raisedButtons />
              </ReactPlayground>
            </Col>
          </div>
        </Col>
        <Col m={3}>
          <ul className='section table-of-contents'>
            <li><a href='#'>Button</a></li>
            <li><a href='#'>Navbar</a></li>
            <li><a href='#'>Card</a></li>
            <li><a href='#'>Preloader</a></li>
            <li><a href='#'>Toast</a></li>
            <li><a href='#'>Modal</a></li>
            <li><a href='#'>Collapsible</a></li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default ComponentsPage;
