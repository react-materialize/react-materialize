import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-addons-test-utils';
import Input from '../src/Input';
import Icon from '../src/Icon';

describe('Input', function() {
  it('renders a text field by default', function() {
    let instance = TestUtils.renderIntoDocument(<Input />);
    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
    input = ReactDOM.findDOMNode(input);
    assert.equal(input.nodeName, 'INPUT');
    assert.equal(input.getAttribute('type'), 'text');
  });

  it('renders a textarea when type is textarea', function() {
    let instance = TestUtils.renderIntoDocument(<Input type='textarea'/>);
    let textarea = TestUtils.findRenderedDOMComponentWithTag(instance, 'textarea');
    assert.ok(textarea);
  });

  it('renders a select element when type is select', function() {
    let instance = TestUtils.renderIntoDocument(
      <Input type='select' defaultValue='v'>
        <option value='v'/>
        <option value='w'/>
      </Input>);
    let select = TestUtils.findRenderedDOMComponentWithTag(instance, 'select');
    assert.equal(ReactDOM.findDOMNode(select).nodeName, 'SELECT');
  });

  it('renders an icon with prefix class name when icon prefix is used', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input type='text'><Icon>account_circle</Icon></Input>
    );
    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'i');
    assert.include(ReactDOM.findDOMNode(input).className, 'prefix');
  });

  it('renders placeholder as the default disabled option for select', () => {
    let defaultOption = 'Choose your option';
    let instance = TestUtils.renderIntoDocument(
        <Input type='select' placeholder={defaultOption}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
        </Input>);
    let options = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'option');
    assert.ok(options);
    assert.equal(options.length, 4);
    assert.equal(options[0].getAttribute('disabled'), '');
    assert.equal(options[0].value, defaultOption);
  });

  it('renders a switch with custom labels',  function() {
    let instance = TestUtils.renderIntoDocument(
        <Input type='switch'/>
      );

    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    assert.include(input.className, 'checkbox');
  });
});
