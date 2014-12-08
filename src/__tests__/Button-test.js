/** @jsx React.DOM */

jest.dontMock('../Button');
jest.dontMock('../constants');
describe('Button', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Button = require('../Button'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Button waves='effect'>Stuff</Button>);
  });

  it('should output a button', function() {
    expect(instance.getDOMNode().nodeName).toBe('BUTTON');
  });

  it('should output a component with btn class', function() {
    expect(instance.getDOMNode().className).toContain('btn');
  });

  it('should apply waves', function() {
    expect(instance.getDOMNode().className).toContain('waves-effect');
  });

  it('should apply waves with color', function() {
    expect(instance.getDOMNode().className).toContain('waves-effect');
  });

  it('should apply large styles', function() {
    instance = TestUtils.renderIntoDocument(<Button large>Stuff</Button>);
    expect(instance.getDOMNode().className).toContain('btn-large');
  });

  it('should apply floating styles', function() {
    instance = TestUtils.renderIntoDocument(<Button floating>Stuff</Button>);
    expect(instance.getDOMNode().className).toContain('btn-floating');
  });

  it('should apply flat styles', function() {
    instance = TestUtils.renderIntoDocument(<Button flat>Stuff</Button>);
    expect(instance.getDOMNode().className).toContain('btn-flat');
  });

  it('should apply disable styles', function() {
    instance = TestUtils.renderIntoDocument(<Button disabled>Stuff</Button>);
    expect(instance.getDOMNode().className).toContain('disabled');
  });

});
