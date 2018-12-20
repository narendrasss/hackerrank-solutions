"use strict";

const HashTable = require("../hash-table");

/**
 * Determines if s1 and s2 share a common substring.
 * A common substring may be as small as 1 character.
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 */
function hasCommonSubstring(s1, s2) {
  const table = new HashTable(s1.length + s2.length);
  table.add(...s1.split(""));

  for (let i = 0; i < s2.length; i++) {
    if (table.contains(s2[i])) return true;
  }

  return false;
}

module.exports = hasCommonSubstring;
