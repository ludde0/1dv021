/**
 * my-array module
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} data An array with numbers
 * @returns {number} The total sum of the numbers in the array.
*/
function getSum (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('The argyment is not an array!')
  }

  return data.reduce((current, next) => current + next, 0)
  // return data.reduce(function (current, next) {
  //   return current + next
  // }, 0)
}

exports.getSum = getSum
