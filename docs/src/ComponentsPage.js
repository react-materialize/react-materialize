var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    Button = require('../../src/Button'),
    Icon = require('../../src/Icon');

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
              <Button waves='light'>button</Button>
              <Button waves='light'><Icon mdi='file-cloud' placement='left'/>button</Button>
              <Button waves='light'><Icon mdi='file-cloud' placement='right'/>button</Button>
            </Col>
            <h4 className='col s12'>
              Floating
            </h4>
            <Col s={12}>
              <Button floating><Icon mdi='content-add'/></Button>
            </Col>
            <h4 className='col s12'>
              Flat
            </h4>
            <Col s={12}>
              <Button flat waves='effect'>Button</Button>
            </Col>
            <h4 className='col s12'>
              Submit Button
            </h4>
            <Col s={12}>
              <Button type='submit' waves='light'><Icon mdi='content-send' placement='right'/>Submit</Button>
            </Col>
            <h3 className='header'>Additional Style</h3>
            <h4 className='col s12'>
              Large
            </h4>
            <Col s={12}>
              <Button waves='light' large>Button</Button>
              <Button waves='light' large><Icon mdi='file-cloud' placement='left'/>Button</Button>
              <Button waves='light' large><Icon mdi='file-cloud' placement='right'/>Button</Button>
            </Col>
            <h4 className='col s12'>
              Disabled
            </h4>
            <Col s={12}>
              <Button large disabled>Button</Button>
              <Button disabled>Button</Button>
              <Button flat disabled>Button</Button>
              <Button floating disabled><Icon mdi='content-add'/></Button>
            </Col>
          </div>
        </Col>
        <Col m={3}>
          <ul className='section table-of-contents'>
            <li><a href='#'>Buttons</a></li>
            <li><a href='#'>Cards</a></li>
          </ul>
        </Col>
      </Row>
    );
  }
});

module.exports = ComponentsPage;
