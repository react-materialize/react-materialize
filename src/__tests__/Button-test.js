jest.dontMock('../Button');
jest.dontMock('../constants');
jest.dontMock('classnames');

describe('Button', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Button = require('../Button'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Button waves='effect'>Stuff</Button>);
  });

  it('should output a button', function() {
      expect(ReactDOM.findDOMNode(instance).nodeName).toBe('BUTTON');
  });

  it('should output a component with btn class', function() {
      expect(ReactDOM.findDOMNode(instance).className).toContain('btn');
  });

  it('should apply waves', function() {
      expect(ReactDOM.findDOMNode(instance).className).toContain('waves-effect');
  });

  it('should apply waves with color', function() {
      expect(ReactDOM.findDOMNode(instance).className).toContain('waves-effect');
  });

  it('should apply large styles', function() {
      instance = TestUtils.renderIntoDocument(<Button large>Stuff</Button>);
      expect(ReactDOM.findDOMNode(instance).className).toContain('btn-large');
  });

  it('should apply floating styles', function() {
      instance = TestUtils.renderIntoDocument(<Button floating>Stuff</Button>);
      expect(ReactDOM.findDOMNode(instance).className).toContain('btn-floating');
  });

  it('should apply flat styles', function() {
      instance = TestUtils.renderIntoDocument(<Button flat>Stuff</Button>);
      expect(ReactDOM.findDOMNode(instance).className).toContain('btn-flat');
  });

  it('should apply disable styles', function() {
      instance = TestUtils.renderIntoDocument(<Button disabled>Stuff</Button>);
      expect(ReactDOM.findDOMNode(instance).className).toContain('disabled');
  });
});
