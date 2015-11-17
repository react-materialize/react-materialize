import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Card from '../src/Card';
import CardTitle from '../src/CardTitle';

describe('Card', function() {
  let instance = null;
  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(
      <Card title='card title' className='blue-grey darken-1' textClassName='white-text'>
        I am a very simple card
      </Card>
    );
  });
  it('should have class name card', function() {
      assert.include(ReactDOM.findDOMNode(instance).className, 'card');
  });

  it('should append class names to container', function() {
      assert.include(ReactDOM.findDOMNode(instance).className, 'blue-grey');
      assert.include(ReactDOM.findDOMNode(instance).className, 'darken-1');
  });

  it('should append text class names to content', function() {
    var text = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-content');
      assert.include(ReactDOM.findDOMNode(text).className, 'white-text');
  });

  it('should render action title element', function() {
    var src = 'assets/image1.jpg';
    var header = <CardTitle image={src}>Card title</CardTitle>;
    instance = TestUtils.renderIntoDocument(
      <Card header={header}>
        I am a very simple card.
      </Card>
    );

    var image = TestUtils.findRenderedDOMComponentWithClass(instance, 'card-image');
      assert.equal(image.firstChild.getAttribute('src'), src);
  });
});
