var fs = require('fs');
var path = require('path');
var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    ReactPlayground = require('./ReactPlayground'),
    raisedButtons = require('../examples/RaisedButton');

import floatingButtons from '../examples/FloatingButton';
import flatButtons from '../examples/FlatButton';
import submitButtons from '../examples/SubmitButton';
import largeButtons from '../examples/LargeButton';
import disabledButtons from '../examples/DisabledButton';
import rightAlignedNavbar from '../examples/RightAlignedNavbar';
import leftAlignedNavbar from '../examples/LeftAlignedNavbar';
import iconLinksNavbar from '../examples/IconLinksNavbar';
import simpleCard from '../examples/CardSimple';
import imageCard from '../examples/CardImage';
import fullCard from '../examples/CardFull';
import preloaders from '../examples/Preloaders';
import basicCollections from '../examples/BasicCollection';
import collectionWithHref from '../examples/CollectionWithHref';
import collectionWithHeader from '../examples/CollectionWithHeader';
import toast from '../examples/Toast';
import modal from '../examples/Modal';
import collapsible from '../examples/Collapsible';
import accordion from '../examples/Accordion';

var ComponentsPage = React.createClass({
  render() {
    return (
      <Row>
        <Col m={9}>
          <h2 className='header'>Button</h2>
          <p className='caption'>
            There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
          </p>
          <div id='raised'>
            <h4 className='col s12'>
              Raised
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../examples/RaisedButton.js'), 'utf8')}>
                {raisedButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Floating
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../examples/FloatingButton.js'), 'utf8')}>
                {floatingButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Flat
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/FlatButton.js'), 'utf8')}>
                {flatButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Submit Button
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/SubmitButton.js'), 'utf8')}>
                {submitButtons}
              </ReactPlayground>
            </Col>
            <h3 className='header'>Additional Style</h3>
            <h4 className='col s12'>
              Large
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/LargeButton.js'), 'utf8')}>
                  {largeButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Disabled
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/DisabledButton.js'), 'utf8')}>
                  {disabledButtons}
              </ReactPlayground>
            </Col>
            <h2 className='header'>
              Navbar
            </h2>
            <h4 className='col s12'>
              Right Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/RightAlignedNavbar.js'), 'utf8')}>
                  {rightAlignedNavbar}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Left Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/LeftAlignedNavbar.js'), 'utf8')}>
                  {leftAlignedNavbar}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Icon Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/IconLinksNavbar.js'), 'utf8')}>
                  {iconLinksNavbar}
              </ReactPlayground>
            </Col>
            <h2 className='header col s12'>
              Cards
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/CardSimple.js'), 'utf8')}>
                  {simpleCard}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/CardImage.js'), 'utf8')}>
                  {imageCard}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/CardFull.js'), 'utf8')}>
                  {fullCard}
              </ReactPlayground>
            </Col>
            <h2 className='header col s12'>
              Preloader
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/Preloaders.js'), 'utf8')}>
                {preloaders}
              </ReactPlayground>
            </Col>
            <h2 className='header col s12'>
              Collections
            </h2>
            <h4 className='col s12'>
              Basic
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/BasicCollection.js'), 'utf8')}>
                {basicCollections}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Basic with different HTML structure
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/CollectionWithHref.js'), 'utf8')}>
                {collectionWithHref}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Collection with header
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/CollectionWithHeader.js'), 'utf8')}>
                {collectionWithHeader}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Toast
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/Toast.js'), 'utf8')}>
                {toast}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Modal
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/Modal.js'), 'utf8')}>
                {modal}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Collapsible
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/Collapsible.js'), 'utf8')}>
                {collapsible}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Accordion
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../examples/Accordion.js'), 'utf8')}>
                {accordion}
              </ReactPlayground>
            </Col>
          </div>
        </Col>
        <Col m={3}>
          <ul className='section table-of-contents'>
            <li><a href='#button'>Button</a></li>
            <li><a href='#navbar'>Navbar</a></li>
            <li><a href='#card'>Card</a></li>
            <li><a href='#preloader'>Preloader</a></li>
            <li><a href='#toast'>Toast</a></li>
            <li><a href='#modal'>Modal</a></li>
            <li><a href='#collapsible'>Collapsible</a></li>
          </ul>
        </Col>
      </Row>
    );
  }
});

module.exports = ComponentsPage;
