'use strict'

const HashTable = require('../hash-table');

/**
 * Checks if note can be constructed using all the words
 * available in magazine (case sensitive). 
 * @param {String[]} magazine 
 * @param {String[]} note 
 * @returns {Boolean}
 */
function checkMagazine(magazine, note) {
    const table = new HashTable(magazine.length * 2);
    table.add(...magazine);

    note.forEach(word => {
        if (!table.contains(word)) return false;
        table.remove(word);
    });

    return true;
}

module.exports = checkMagazine;