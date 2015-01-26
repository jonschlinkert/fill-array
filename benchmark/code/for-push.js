'use strict';

module.exports = fillArray;

function fillArray(arr, num) {
  var len = arr.length;
  var res = new Array(0);

  for (var i = 0; i < num; i++) {
    res.push(arr[i % len]);
  }

  return res;
}
