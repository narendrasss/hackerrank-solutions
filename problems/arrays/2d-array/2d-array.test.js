"use strict";

const hourglassSum = require("./2d-array");

const c1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

test("Array c1 has maximum 19", () => {
  expect(hourglassSum(c1)).toEqual(19);
});
