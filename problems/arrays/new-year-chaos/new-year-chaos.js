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
    for (let i = 0; i < q.length - 1; i++) {
        for (let k = 0; k < q.length - i - 1; k++) {
            if (q[k] > q[k + 1]) {
                swap(q, k, k + 1);
                numBribes++;
            }
        }
    }
    return numBribes;
}

/**
 * Checks if the given queue is a valid configuration. 
 * @param {Number[]} q the queue to check
 * @returns {Boolean} true if q is valid, false otherwise.
 */
function checkPossible(q) {
    return q.filter((el, i) => el - i > 3).length == 0;
}

/**
 * Swaps the elements at indices i and j.
 * @param {Number[]} q 
 * @param {Number} i 
 * @param {Number} j 
 */
function swap(q, i, j) {
    const temp = q[i];
    q[i] = q[j];
    q[j] = temp;
}

module.exports = minimumBribes;