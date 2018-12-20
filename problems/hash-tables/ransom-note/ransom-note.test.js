'use strict'

const checkMagazine = require('./ransom-note');

test('Should return true', () => {
    expect(checkMagazine(['give','me','one','grand','today','night'],['give','one','grand','today'])).toBeTruthy();
});