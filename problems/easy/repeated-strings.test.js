'use strict'

const repeatedString = require('./repeated-strings');

test("With inputs aba and 10 should return 7", () => {
    expect(repeatedString("aba", 10)).toEqual(7);
});

test("With inputs a and 1000000000 should return 1000000000", () => {
    expect(repeatedString("a", 1000000000)).toEqual(1000000000);
});