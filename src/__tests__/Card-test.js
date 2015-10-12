jest.dontMock('../Card');
jest.dontMock('../CardTitle');
jest.dontMock('classnames');

describe('Card', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Card = require('../Card'),
      CardTitle = require('../CardTitle'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(
      <Card title='card title' className='blue-grey darken-1' textClassName='white-text'>
        I am a very simple card
      </Card>
    );
  });
  it('should have class name card', function() {
      expect(ReactDOM.findDOMNode(instance).className).toContain('card');
  });

  it('should append class names to container', function() {
    expect(ReactDOM.findDOMNode(instance).className).toContain('blue-grey');
    expect(ReactDOM.findDOMNode(instance).className).toContain('darken-1');
  });

  it('should append text class names to content', function() {
    var text = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-content');
      expect(ReactDOM.findDOMNode(text).className).toContain('white-text');
  });

  //it('should render title under content when image is absent', function() {
  //  var content = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-content');
  //  var title = TestUtils.findRenderedDOMComponentWithClass(content, 'card-title');
  //  expect(title.getDOMNode().innerHTML).toBe('card title');
  //});

  it('should render actions', function() {
    var cardActions = [<a key='link1' href='#'>link1</a>, <a key='link2' href='#'>link2</a>];
    instance = TestUtils.renderIntoDocument(
      <Card title='card title' className='blue-grey darken-1' textClassName='white-text'
        actions={cardActions}>
        I am a very simple card.
      </Card>
    );
    var actions = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-action');
    expect(actions.firstChild.innerHTML).toBe('link1');
    expect(actions.lastChild.innerHTML).toBe('link2');
  });

  it('should render action title element', function() {
    var src = "assets/image1.jpg";
    var header = <CardTitle image={src}>Card title</CardTitle>;
    instance = TestUtils.renderIntoDocument(
      <Card header={header}>
        I am a very simple card.
      </Card>
    );

    var image = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-image');
    expect(image.firstChild.getAttribute('src')).toBe(src);
  });
});
