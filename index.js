/*!
 * fill-array <https://github.com/jonschlinkert/fill-array>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = fillArray;

function fillArray(arr, num) {
  if (num === 0) return [];

  var len = arr.length;
  var max = num - len;

  if (num >= len) {
    while (max--) {
      arr[max + len] = arr[max % len];
    }
  }
  return arr;
}
