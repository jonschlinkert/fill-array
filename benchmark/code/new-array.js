'use strict';

module.exports = fillArray;

function fillArray(arr, num) {
  if (num === 0) return [];

  var res = arr.concat(new Array(num + 1));
  var len = arr.length;

  if (num <= len) return arr;
  var max = num - len;
  var i = 0;

  while (max--) {
    res[len + i] = res[i % len];
    i++;
  }

  return res;
}
