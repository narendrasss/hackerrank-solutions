'use strict'

/**
 * Brute force approach.
 * @param {Number[][]} arr a 6x6 2d array
 * @returns {Number}
 */
function hourglassSum(arr) {
    const hourglasses = getAllHourglasses(arr);
    const sums = hourglasses.map(getSum);
    return Math.max(...sums);
}

/**
 * Returns an array of all the hourglasses in arr.
 * @param {Number[][]} arr 
 * @returns {Number[][]}
 */
function getAllHourglasses(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let k = 0; k < arr[i].length - 2; k++) {
            let hourglass = [
                arr[k][i], arr[k][i + 1], arr[k][i + 2],
                arr[k + 1][i + 1],
                arr[k + 2][i], arr[k + 2][i + 1], arr[k + 2][i + 2]
            ];
            result.push(hourglass);
        }
    }
    return result;
}

/**
 * Returns the sum of this hourglass.
 * @param {Number[]} hourglass 
 * @returns {Number}
 */
function getSum(hourglass) {
    return hourglass.reduce((acc, num) => acc + num);
}

module.exports = hourglassSum;