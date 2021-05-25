/**
 * My-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a copy of an array where a number has been added to the end of the copy.
 *
 * @param {Array} source The array to create a copy of.
 * @param {Number} number The number to add to the end of the copy of the array.
 * @throws {TypeError} The source parameter must be an Array; number parameter must be a Number.
 * @returns {Array} A copy of the source array with an additional number.
 */
function immutablePushNumber (source, number) {
  if (!Array.isArray(source) || isNaN(number)) {
    throw new TypeError()
  }

  const result = source.slice()
  result.push(number)
  return result
}

exports.immutablePushNumber = immutablePushNumber
