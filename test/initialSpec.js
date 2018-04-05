/* global describe, it, before, after */

import { assert } from 'chai';

describe('jQuery is added to jsdom', () => {
  const $node = $('<div class="some-module"></div>');

  beforeAll(() => {
    $('body').append($node);
  });

  afterAll(() => {
    $node.remove();
  });

  test('creates and removes elements', () => {
    assert.equal($('div.some-module').length, 1);
  });
});
