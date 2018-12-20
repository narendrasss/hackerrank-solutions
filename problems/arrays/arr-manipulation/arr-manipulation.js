"use strict";

/**
 * Begin with an array of zeroes of size n. Given a list
 * of operations, for each operation add a value to each
 * element of the array between two given indices inclusive.
 *
 * For example, let n = 10 and queries be:
 *         a b k
 * q[0] = [1 5 3]
 * q[1] = [4 8 7]
 * q[2] = [6 9 1]
 *
 * We add the value of k between the indices a and b:
 *  1  2  3  4  5  6  7  8  9  10
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] -> before operations
 * [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] -> after (1)
 * [3, 3, 3,10,10, 7, 7, 7, 0, 0] -> after (2)
 * [3, 3, 3,10,10, 8, 8, 8, 8, 0] -> after (3)
 *
 * The function returns the max value, 10.
 *
 * @param {Number} n size of the required array
 * @param {Number[][]} queries list of operations
 * @returns {Number} maximum value in resultant array
 */
function manipulate(n, queries) {}
