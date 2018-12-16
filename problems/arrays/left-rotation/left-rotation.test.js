'use strict'

const rotLeft = require('./left-rotation');

let input = [1,2,3,4,5];

afterEach(() => {
    input = [1,2,3,4,5];
});

test('Given 1 rotates left once', () => {
    const expected = [2,3,4,5,1];
    expect(rotLeft(input, 1)).toEqual(expected);
});

test('Given n rotates left n times', () => {
    const expected = [5,1,2,3,4];
    expect(rotLeft(input, 4)).toEqual(expected);
});