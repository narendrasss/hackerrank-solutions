"use strict";

const HashTable = require("../hash-table");

/**
 * Checks if note can be constructed using all the words
 * available in magazine (case sensitive).
 * @param {String[]} magazine
 * @param {String[]} note
 * @returns {Boolean}
 */
function checkMagazine(magazine, note) {
  /*
    let dict = {};
    magazine.forEach(word => {
        if (!dict[word]) {
            dict[word] = 1;
        } else dict[word]++;
    });

    for (let i = 0; i < note.length; i++) {
        const word = note[i];
        if (!dict[word] || dict[word] < 1) return false;
        dict[word]--;
    }
    */
  const table = new HashTable(magazine.length * 2);
  table.add(...magazine);

  for (let i = 0; i < note.length; i++) {
    const word = note[i];
    if (!table.contains(word)) return false;
    table.remove(word);
  }

  return true;
}

module.exports = checkMagazine;
