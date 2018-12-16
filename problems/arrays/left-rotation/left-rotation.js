'use strict'

/**
 * @param {Number[]} ar 
 * @param {Number} n 
 * @returns {Number[]}
 */
function rotLeft(ar, n) {
    let result = ar;
    for (let i = 0; i < n; i++) {
        result = rotLeftOnce(result);
    }
    return result;
}

function rotLeftOnce() {
    
}

module.exports = rotLeft;