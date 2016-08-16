import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Button from'../src/Button';

var instance = null;

describe('Button', () => {
  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(<Button waves='light'>Stuff</Button>);
  });

  it('should output a button', function() {
      assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'BUTTON');
  });

  it('should output a component with btn class', function() {
      assert.include(ReactDOM.findDOMNode(instance).className, 'btn');
  });

  it('should apply waves', function() {
      assert.include(ReactDOM.findDOMNode(instance).className, 'waves-effect');
  });

  it('should apply waves with color', function() {
      assert.include(ReactDOM.findDOMNode(instance).className, 'waves-effect');
  });

  it('should apply large styles', function() {
      instance = TestUtils.renderIntoDocument(<Button large>Stuff</Button>);
      assert.include(ReactDOM.findDOMNode(instance).className, 'btn-large');
  });

  it('should apply floating styles', function() {
      instance = TestUtils.renderIntoDocument(<Button floating>Stuff</Button>);
      assert.include(ReactDOM.findDOMNode(instance).className, 'btn-floating');
  });

  it('should apply flat styles', function() {
      instance = TestUtils.renderIntoDocument(<Button flat>Stuff</Button>);
      assert.include(ReactDOM.findDOMNode(instance).className, 'btn-flat');
  });

  it('should apply disable styles', function() {
      instance = TestUtils.renderIntoDocument(<Button disabled>Stuff</Button>);
      assert.include(ReactDOM.findDOMNode(instance).className, 'disabled');
  });
});
