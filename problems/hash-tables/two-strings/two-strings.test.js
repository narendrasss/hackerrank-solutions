"use strict";

const hasCommonSubstring = require("./two-strings");

test("'hello' and 'world' should have two common substrings", () => {
  expect(hasCommonSubstring("hello", "world")).toBeTruthy();
});

test("'h1' and 'world' should have no common substrings", () => {
  expect(hasCommonSubstring("h1", "world")).toBeFalsy();
});
