'use strict'

const minimumBribes = require('./new-year-chaos');

const ex1 = [2,1,5,3,4];
const ex2 = [2,5,1,3,4];
const ex3 = [1,2,5,3,4,7,8,6];

test('Example 1 has 3 minimum bribes', () => {
    expect(minimumBribes(ex1)).toBe(3);
});

test('Example 2 is too chaotic', () => {
    expect(minimumBribes(ex2)).toEqual('Too chaotic');
});

test('Example 3 has 4 minimum bribes', () => {
    expect(minimumBribes(ex3)).toBe(4);
});