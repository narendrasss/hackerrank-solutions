"use strict";

/**
 * @param {Number[]} ar
 * @param {Number} n
 * @returns {Number[]}
 */
function rotLeft(ar, n) {
  let result = ar;
  for (let i = 0; i < n; i++) {
    result = rotLeftOnce(result);
  }
  return result;
}

/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */
function rotLeftOnce(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

module.exports = rotLeft;
