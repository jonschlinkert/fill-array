'use strict';

module.exports = fillArray;

function fillArray(arr, num) {
  if (num === 0) return [];

  var res = arr;
  var len = arr.length;

  if (len < num) {
    for (var i = num - len - 1; i >= 0; i--) {
      res[i + len] = res[i % len];
    }
  }

  return res;
}
