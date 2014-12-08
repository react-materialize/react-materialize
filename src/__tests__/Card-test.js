jest.dontMock('../Card');

describe('Card', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Card = require('../Card'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(
      <Card title='card title' className='blue-grey darken-1' textClassName='white-text'>
        I am a very simple card
      </Card>
    );
  });
  it('should have class name card', function() {
    expect(instance.getDOMNode().className).toContain('card');
  });

  it('should append class names to container', function() {
    expect(instance.getDOMNode().className).toContain('blue-grey');
    expect(instance.getDOMNode().className).toContain('darken-1');
  });

  it('should append text class names to content', function() {
    var text = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-content');
    expect(text.getDOMNode().className).toContain('white-text');
  });

  it('should render title', function() {
    var title = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-title');
    expect(title.getDOMNode().innerHTML).toBe('card title');
  });

  it('should render actions', function() {
    var cardActions = [<a href='#'>link1</a>, <a href='#'>link2</a>];
    instance = TestUtils.renderIntoDocument(
      <Card title='card title' className='blue-grey darken-1' textClassName='white-text'
        actions={cardActions}>
        I am a very simple card
      </Card>
    );
    var actions = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-action');
    expect(actions.getDOMNode().firstChild.innerHTML).toBe('link1');
    expect(actions.getDOMNode().lastChild.innerHTML).toBe('link2');
  });
});
