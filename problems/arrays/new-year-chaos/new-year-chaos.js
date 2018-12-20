'use strict'

/**
 * Any person in the queue can bribe the person directly in
 * front of them to swap positions. A person can bribe at most
 * two others.
 * 
 * Given the current state of the queue, determine the minimum 
 * number of bribes required to get the array to its current place.
 * 
 * The initial state is always [1, 2, 3, ..., n].
 * 
 * If the line configuration is not possible, print 'too chaotic'.
 * 
 * TODO: Optimize this! Current runtime -> O(n^2)
 * 
 * @param {Number[]} q the current queue state
 * @returns {Number | String} the minimum number of bribes or
 *                            'too chaotic' if not possible.
 */
function minimumBribes(q) {
    if (!checkPossible(q)) return 'Too chaotic';

    let numBribes = 0;
    let fixed = 0;
    let i = q.length - 1;
    while (fixed != q.length) {
        const jumps = q[i] - i - 1;
        if (jumps >= 0) {
            shift(q, i, jumps);
            numBribes += jumps;
            fixed++;
            i = q.length - fixed - 1;
        }
        i--;
    }
    return q;
}

/**
 * Checks if the given queue is a valid configuration. 
 * @param {Number[]} q the queue to check
 * @returns {Boolean} true if q is valid, false otherwise.
 */
function checkPossible(q) {
    return q.filter((el, i) => el - i > 3).length == 0;
}

function getMismatch(q) {
    for (let i = q.length - 1; i > -1; i--) {
        const jumps = q[i] - i - 1;
        if (jumps > 0) return i;
    }
    return -1;
}

function shift(q, i, n) {
    const temp = q[i];
    for (let k = 0; k < n; k++) {
        q[i + k] = q[i + k + 1];
    }
    q[i + n] = temp;
}

module.exports = minimumBribes;