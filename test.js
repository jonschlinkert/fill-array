/*!
 * fill-array <https://github.com/jonschlinkert/fill-array>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var fill = require('./');

it('should fill the elements in the array to the specified length.', function () {
  assert.deepEqual(fill(['a', 'b', 'c'], 10), ['a','b','c','a','b','c','a','b','c','a']);
  assert.deepEqual(fill(['ab', 'cd'], 3), ['ab', 'cd', 'ab']);
  assert.deepEqual(fill(['ab', 'cd'], 4), ['ab', 'cd', 'ab', 'cd']);
  assert.deepEqual(fill(['ab', 'cd'], 5), ['ab', 'cd', 'ab', 'cd', 'ab']);
  assert.deepEqual(fill(['ab', 'cd'], 6), ['ab', 'cd', 'ab', 'cd', 'ab', 'cd']);
});

it('should return the array when the given length is shorter than the array.', function () {
  assert.deepEqual(fill(['ab', 'cd'], 1), ['ab', 'cd']);
});

it('should return the array when the given length is equal to the array length.', function () {
  assert.deepEqual(fill(['a', 'b', 'c'], 3), ['a', 'b', 'c']);
  assert.deepEqual(fill(['ab', 'cd'], 2), ['ab', 'cd']);
});
