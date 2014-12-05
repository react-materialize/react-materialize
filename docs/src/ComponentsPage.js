var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col');

var ComponentsPage = React.createClass({
  render() {
    return (
      <Row>
        <Col m={9}>
          <h4>Button</h4>
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
