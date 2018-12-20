"use strict";

/**
 * @param {String[]} clouds
 * @returns {Number}
 */
function jumpingOnClouds(clouds) {
  let pos = 0;
  let jumps = 0;
  while (pos < clouds.length - 1) {
    const toJump = pos + 2;
    pos = clouds[toJump] ? pos + 1 : toJump;
    jumps++;
  }
  return jumps;
}

module.exports = jumpingOnClouds;
