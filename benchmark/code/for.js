'use strict';

module.exports = fillArray;

function fillArray(arr, num) {
  var len = arr.length;
  var res = new Array(num);

  for (var i = 0; i < num; i++) {
    res[i] = arr[i % len];
  }

  return res;
}
