var fs = require('fs'); // brfs bug
var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    ReactPlayground = require('./ReactPlayground');

var ComponentsPage = React.createClass({
  render() {
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
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/RaisedButtons.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Floating
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/FloatingButton.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Flat
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/FloatingButton.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Submit Button
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/SubmitButton.js', 'utf8')} />
            </Col>
            <h3 className='header'>Additional Style</h3>
            <h4 className='col s12'>
              Large
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/LargeButtons.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Disabled
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/DisabledButtons.js', 'utf8')} />
            </Col>
            <h2 className='header'>
              Navbar
            </h2>
            <h4 className='col s12'>
              Right Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/RightAlignedNavbar.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Left Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/LeftAlignedNavbar.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Icon Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/IconLinksNavbar.js', 'utf8')} />
            </Col>
            <h2 className='header'>
              Cards
            </h2>
            <Col s={12} m={6}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/CardSimple.js', 'utf8')} />
            </Col>
            <Col s={12} m={6}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/CardImage.js', 'utf8')} />
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/CardFull.js', 'utf8')} />
            </Col>
            <h2 className='header'>
              Preloader
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/Preloaders.js', 'utf8')} />
            </Col>
            <h2 className='header'>
              Collections
            </h2>
            <h4 className='col s12'>
              Basic
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/BasicCollection.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Basic with different HTML structure
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/CollectionWithHref.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Collection with header
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/CollectionWithHeader.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Toast
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/Toast.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Modal
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/Modal.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Collapsible
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/Collapsible.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Accordion
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(__dirname + '/../examples/Accordion.js', 'utf8')} />
            </Col>
            <h4 className='col s12'>
              Dropdown
            </h4>
            <Col s={12}>
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
});

module.exports = ComponentsPage;
