import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';

import ReactPlayground from './ReactPlayground';
import raisedButtons from '../../examples/RaisedButton';

import accordion from '../../examples/Accordion';
import badgeCollections from '../../examples/BadgeCollections';
import badgeDropdowns from '../../examples/BadgeDropdowns';
import badgeNavbar from '../../examples/BadgeNavbar';
import basicCollections from '../../examples/BasicCollection';
import collectionWithHref from '../../examples/CollectionWithHref';
import collectionWithHeader from '../../examples/CollectionWithHeader';
import collapsible from '../../examples/Collapsible';
import contactChip from '../../examples/ContactChip';
import disabledButtons from '../../examples/DisabledButton';
import floatingButtons from '../../examples/FloatingButton';
import flatButtons from '../../examples/FlatButton';
import iconLinksNavbar from '../../examples/IconLinksNavbar';
import inputFields from '../../examples/InputFields';
import largeButtons from '../../examples/LargeButton';
import leftAlignedNavbar from '../../examples/LeftAlignedNavbar';
import mediaBox from '../../examples/MediaBox';
import modal from '../../examples/Modal';
import modalFixedFooter from '../../examples/ModalWithFixedFooter';
import modalBottomSheet from '../../examples/ModalWithBottomSheet';
import pagination from '../../examples/Pagination';
import preloaders from '../../examples/Preloaders';
import rightAlignedNavbar from '../../examples/RightAlignedNavbar';
import slider from '../../examples/Slider';
import submitButtons from '../../examples/SubmitButton';
import toast from '../../examples/Toast';
import tab from '../../examples/Tab';
import tag from '../../examples/Tag';
import PropTable from './PropTable';

var path = require('path');
var fs = require('fs');

var ComponentsPage = React.createClass({
  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <h2 id='button' className='header'>Button</h2>
          <p className='caption'>
            There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
          </p>
          <div id='raised'>
            <h4 className='col s12'>
              Raised
            </h4>
            <Col s={12} m={9}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../../examples/RaisedButton.js'), 'utf8')}>
                {raisedButtons}
              </ReactPlayground>
            <PropTable component="Button"/>
            </Col>
            <h4 className='col s12'>
              Floating
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../../examples/FloatingButton.js'), 'utf8')}>
                {floatingButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Flat
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/FlatButton.js'), 'utf8')}>
                {flatButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Submit Button
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/SubmitButton.js'), 'utf8')}>
                {submitButtons}
              </ReactPlayground>
            </Col>
            <h3 className='header col s12'>Additional Style</h3>
            <h4 className='col s12'>
              Large
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/LargeButton.js'), 'utf8')}>
                  {largeButtons}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Disabled
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/DisabledButton.js'), 'utf8')}>
                  {disabledButtons}
              </ReactPlayground>
            </Col>

            <h2 id='badge' className='header col s12'>
              Badge
            </h2>
            <div id="badgeCollections">
              <h4 className='col s12'>Collections</h4>
              <Col s={12} m={9}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/BadgeCollections.js'), 'utf8')}>
                  {badgeCollections}
                </ReactPlayground>
              </Col>
            </div>

            <div id="badgeDropdowns">
              <h4 className='col s12'>Dropdowns</h4>
              <Col s={12} m={9}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/BadgeDropdowns.js'), 'utf8')}>
                  {badgeDropdowns}
                </ReactPlayground>
              </Col>
            </div>

            <div id="badgeNavbar">
              <h4 className='col s12'>Navbar</h4>
              <Col s={12} m={9}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/BadgeNavbar.js'), 'utf8')}>
                  {badgeNavbar}
                </ReactPlayground>
              </Col>
            </div>

            <h2 id='tab' className='header col s12'>
                Tab
            </h2>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Tab.js'), 'utf8')}>
                    {tab}
                </ReactPlayground>
            </Col>
            <h2 id='navbar' className='header col s12'>
              Navbar
            </h2>
            <h4 className='col s12'>
              Right Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/RightAlignedNavbar.js'), 'utf8')}>
                  {rightAlignedNavbar}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Left Aligned Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/LeftAlignedNavbar.js'), 'utf8')}>
                  {leftAlignedNavbar}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Icon Links
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/IconLinksNavbar.js'), 'utf8')}>
                  {iconLinksNavbar}
              </ReactPlayground>
            </Col>
            <h2 id='pagination' className='header col s12'>
                Basic Pagination
            </h2>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Pagination.js'), 'utf8')}>
                    {pagination}
                </ReactPlayground>
            </Col>
            <h2 id='card' className='header col s12'>
              Card
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CardSimple.js'), 'utf8')}>
                  {simpleCard}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CardImage.js'), 'utf8')}>
                  {imageCard}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CardFull.js'), 'utf8')}>
                  {fullCard}
              </ReactPlayground>
            </Col>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CardPanel.js'), 'utf8')}>
                    {panelCard}
                </ReactPlayground>
            </Col>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CardReveal.js'), 'utf8')}>
                    {revealCard}
                </ReactPlayground>
            </Col>
            <h2 id='mediabox' className='header col s12'>
                MediaBox
            </h2>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/MediaBox.js'), 'utf8')}>
                    {mediaBox}
                </ReactPlayground>
            </Col>
            <h2 id='slider' className='header col s12'>
                Slider
            </h2>
            <Col s={12}>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Slider.js'), 'utf8')}>
                    {slider}
                </ReactPlayground>
            </Col>
            <h2 id='chip' className='header col s12'>
              Chip
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/ContactChip.js'), 'utf8')}>
                {contactChip}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Tag.js'), 'utf8')}>
                {tag}
              </ReactPlayground>
            </Col>
            <h2 id='form' className='header col s12'>
              Form
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/InputFields.js'), 'utf8')}>
                {inputFields}
              </ReactPlayground>
            </Col>
            <h2 id='preloader' className='header col s12'>
              Preloader
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Preloaders.js'), 'utf8')}>
                {preloaders}
              </ReactPlayground>
            </Col>
            <h2 id='toast' className='header col s12'>
              Toast
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Toast.js'), 'utf8')}>
                {toast}
              </ReactPlayground>
            </Col>
            <h2 id='modal' className='header col s12'>
              Modal
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Modal.js'), 'utf8')}>
                {modal}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/ModalWithFixedFooter.js'), 'utf8')}>
                {modalFixedFooter}
              </ReactPlayground>
            </Col>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/ModalWithBottomSheet.js'), 'utf8')}>
                {modalBottomSheet}
              </ReactPlayground>
            </Col>
            <h2 id='collection' className='header col s12'>
              Collections
            </h2>
            <h4 className='col s12'>
              Basic
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/BasicCollection.js'), 'utf8')}>
                {basicCollections}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Basic with different HTML structure
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CollectionWithHref.js'), 'utf8')}>
                {collectionWithHref}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Collection with header
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/CollectionWithHeader.js'), 'utf8')}>
                {collectionWithHeader}
              </ReactPlayground>
            </Col>
            <h2 id='collapsible' className='header col s12'>
              Collapsible
            </h2>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Collapsible.js'), 'utf8')}>
                {collapsible}
              </ReactPlayground>
            </Col>
            <h4 className='col s12'>
              Accordion
            </h4>
            <Col s={12}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '/../../examples/Accordion.js'), 'utf8')}>
                {accordion}
              </ReactPlayground>
            </Col>
          </div>
        </Col>
        <Col m={3} l={2} className="hide-on-small-only">
          <ul className='section table-of-contents'>
            <li><a href='#button'>Button</a></li>
            <li><a href='#badge'>Badge</a></li>
            <li><a href='#tab'>Tab</a></li>
            <li><a href='#navbar'>Navbar</a></li>
            <li><a href='#pagination'>Pagination</a></li>
            <li><a href='#card'>Card</a></li>
            <li><a href='#mediabox'>MediaBox</a></li>
            <li><a href='#slider'>Slider</a></li>
            <li><a href='#chip'>Chip</a></li>
            <li><a href='#form'>Form</a></li>
            <li><a href='#preloader'>Preloader</a></li>
            <li><a href='#toast'>Toast</a></li>
            <li><a href='#modal'>Modal</a></li>
            <li><a href='#collection'>Collection</a></li>
            <li><a href='#collapsible'>Collapsible</a></li>
          </ul>
        </Col>
      </Row>
    );
  }
});

module.exports = ComponentsPage;
