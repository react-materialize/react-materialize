import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Select from '../src/Select';

describe('Select', () => {
  it('should renders a Select component', () => {
    let instance = TestUtils.renderIntoDocument(
      <Select
          s={12}
          m={8}
          l={6}
          defaultValue="2"
          onChange={() => {}}>
        <option value="1">Option 1</option>;
        <option value="2">Option 2</option>;
        <option value="3">Option 3</option>;
      </Select>
    );

    let select = TestUtils.findRenderedDOMComponentWithTag(instance, 'select');
    let selectNode = ReactDOM.findDOMNode(select);
    let options = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'option');

    assert.equal(selectNode.nodeName, 'SELECT');
    assert.equal(selectNode.value, '2');
    assert.include(selectNode.className, 's12');
    assert.include(selectNode.className, 'm8');
    assert.include(selectNode.className, 'l6');
    assert.ok(options);
    assert.equal(options.length, 3);

  });
});
