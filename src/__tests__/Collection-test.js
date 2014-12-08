jest.dontMock('../Collection');
jest.dontMock('../CollectionItem');

describe('Collection', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Collection = require('../Collection'),
      CollectionItem = require('../CollectionItem'),
      instance = null;

  it('should render a ul element', function() {
    instance = TestUtils.renderIntoDocument(
      <Collection>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );
    expect(instance.getDOMNode().nodeName).toBe('UL');
    expect(instance.getDOMNode().className).toContain('collection');
  });

  it('should support "header" prop as a string', function() {
    var header = 'First Names';
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    expect(instance.getDOMNode().className).toContain('with-header');
    expect(instance.getDOMNode().firstChild.className).toContain('collection-header');
    expect(instance.getDOMNode().firstChild.firstChild.nodeName).toBe('H4');
    expect(instance.getDOMNode().firstChild.firstChild.innerHTML).toBe(header);
  });

  it('should support "header" prop as a component', function() {
    var header = <h2>First Names</h2>;
    instance = TestUtils.renderIntoDocument(
      <Collection header={header}>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    expect(instance.getDOMNode().className).toContain('with-header');
    expect(instance.getDOMNode().firstChild.className).toContain('collection-header');
    expect(instance.getDOMNode().firstChild.firstChild.nodeName).toBe('H2');
    expect(instance.getDOMNode().firstChild.firstChild.innerHTML).toBe('First Names');
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
    expect(instance.getDOMNode().nodeName).toBe('DIV');
    expect(instance.getDOMNode().firstChild.nodeName).toBe('A');
  });

});
