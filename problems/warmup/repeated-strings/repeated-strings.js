"use strict";

/**
 * @param {String} s
 * @param {Number} n
 * @returns {Number}
 */
function repeatedString(s, n) {
  if (s == "a") return n;
  const l = s.length;
  const r = n % l;
  const as = getOccurences(s) * Math.floor(n / l);
  return as + getOccurences(s.substring(0, r));
}

function getOccurences(s) {
  const ar = s.split("");
  return ar.filter(el => el == "a").length;
}

module.exports = repeatedString;
