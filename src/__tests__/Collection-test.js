jest.dontMock('../Collection');
jest.dontMock('../CollectionItem');
jest.dontMock('classnames');

describe('Collection', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Collection = require('../Collection'),
      CollectionItem = require('../CollectionItem'),
      instance = null;

  it('should render a ul element', function() {
    instance = TestUtils.renderIntoDocument(
      <Collection>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );
    expect(ReactDOM.findDOMNode(instance).nodeName).toBe('UL');
    expect(ReactDOM.findDOMNode(instance).className).toContain('collection');
  });

  it('should support "header" prop as a string', function() {
    var header = 'First Names';
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    expect(ReactDOM.findDOMNode(instance).className).toContain('with-header');
    expect(ReactDOM.findDOMNode(instance).firstChild.className).toContain('collection-header');
    expect(ReactDOM.findDOMNode(instance).firstChild.firstChild.nodeName).toBe('H4');
    expect(ReactDOM.findDOMNode(instance).firstChild.firstChild.innerHTML).toBe(header);
  });

  it('should support "header" prop as a component', function() {
    var header = <h2>First Names</h2>;
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    expect(ReactDOM.findDOMNode(instance).className).toContain('with-header');
    expect(ReactDOM.findDOMNode(instance).firstChild.className).toContain('collection-header');
    expect(ReactDOM.findDOMNode(instance).firstChild.firstChild.nodeName).toBe('H2');
    expect(ReactDOM.findDOMNode(instance).firstChild.firstChild.innerHTML).toBe('First Names');
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
    expect(ReactDOM.findDOMNode(instance).nodeName).toBe('DIV');
    expect(ReactDOM.findDOMNode(instance).firstChild.nodeName).toBe('A');
  });

});
