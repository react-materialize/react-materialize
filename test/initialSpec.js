/* global describe, it, before, after */

import { assert } from 'chai';

describe('jQuery is added to jsdom', () => {
  const $node = $('<div class="some-module"></div>');

  before(() => {
    $('body').append($node);
  });

  after(() => {
    $node.remove();
  });

  it('creates and removes elements', () => {
    assert.equal($('div.some-module').length, 1);
  });
});
