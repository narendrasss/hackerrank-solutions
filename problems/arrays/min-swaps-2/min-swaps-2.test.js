"use strict";

const minimumSwaps = require("./min-swaps-2");

test("[4,3,1,2] requires 3 swaps", () => {
  expect(minimumSwaps([4, 3, 1, 2])).toBe(3);
});

test("[2,3,4,1,5] requires 3 swaps", () => {
  expect(minimumSwaps([2, 3, 4, 1, 5])).toBe(3);
});

test("[1,3,5,2,4,6,7] requires 3 swaps", () => {
  expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
});
