import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';


describe('Collection', function() {
  let instance = null;
  it('should render a ul element', function() {
    instance = TestUtils.renderIntoDocument(
      <Collection>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );
    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'UL');
    assert.include(ReactDOM.findDOMNode(instance).className, 'collection');
  });

  it('should support "header" prop as a string', function() {
    var header = 'First Names';
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    assert.include(ReactDOM.findDOMNode(instance).className, 'with-header');
    assert.include(ReactDOM.findDOMNode(instance).firstChild.className, 'collection-header');
    assert.equal(ReactDOM.findDOMNode(instance).firstChild.firstChild.nodeName, 'H4');
    assert.equal(ReactDOM.findDOMNode(instance).firstChild.firstChild.innerHTML, header);
  });

  it('should support "header" prop as a component', function() {
    var header = <h2>First Names</h2>;
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    assert.include(ReactDOM.findDOMNode(instance).className, 'with-header');
    assert.include(ReactDOM.findDOMNode(instance).firstChild.className, 'collection-header');
    assert.equal(ReactDOM.findDOMNode(instance).firstChild.firstChild.nodeName, 'H2');
    assert.equal(ReactDOM.findDOMNode(instance).firstChild.firstChild.innerHTML, 'First Names');
  });

  it('should render anchor if href is present', function() {
    instance = TestUtils.renderIntoDocument(
      <Collection>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#' className='active'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
      </Collection>
    );
    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
    assert.equal(ReactDOM.findDOMNode(instance).firstChild.nodeName, 'A');
  });

});
