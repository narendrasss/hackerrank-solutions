"use strict";

const manipulate = require("./arr-manipulation");

const q = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

test("With n = 5 and given q should return 200", () => {
  expect(manipulate(5, q)).toBe(200);
});
