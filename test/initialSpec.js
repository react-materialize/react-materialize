/* global describe, it, before, after */

import { assert } from 'chai';

describe('jQuery is in the global scope', () => {
  const $node = $('<div class="some-module"></div>');

  before(() => {
    $('body').append($node);
  });

  after(() => {
    $node.remove();
  });

  it('should render', () => {
    assert.equal($('div.some-module').length, 1);
  });
});
