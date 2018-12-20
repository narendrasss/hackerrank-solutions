"use strict";

const jumpingOnClouds = require("./jumping-on-clouds");

const c1 = [0, 0, 1, 0, 0, 1, 0];
const c2 = [0, 0, 0, 0, 1, 0];

test("Minimum jumps for [0,0,1,0,0,1,0] is 4", () => {
  expect(jumpingOnClouds(c1)).toEqual(4);
});

test("Minimum jumps for [0,0,0,0,1,0] is 3", () => {
  expect(jumpingOnClouds(c2)).toEqual(3);
});
