'use strict'

const freqQuery = require('./frequency-queries');

const q1 = [[1,5],[1,6],[3,2],[1,10],[1,10],[1,6],[2,5],[3,2]];
const q2 = [[3,4],[2,1003],[1,16],[3,1]];
const q3 = [[1,3],[2,3],[3,2],[1,4],[1,5],[1,5],[1,4],[3,2],[2,4],[3,2]];

test('Query 1 should return [0,1]', () => {
    expect(freqQuery(q1)).toEqual([0,1]);
});

test('Query 2 should return [0,1]', () => {
    expect(freqQuery(q2)).toEqual([0, 1]);
});

test('Query 3 should return [0,1,1]', () => {
    expect(freqQuery(q3)).toEqual([0, 1, 1]);
});