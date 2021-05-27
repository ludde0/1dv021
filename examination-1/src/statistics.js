/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author TODO: Write your name here.
 * @version 1.2.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
  return {
    maximum: maximum(numbers),
    mean: mean(numbers)
  }
}

function checkValidArgument (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  if (numbers === []) {
    throw new Error('The passed array contains no elements.')
  }
  numbers.forEach(function (element) {
    if (isNaN(element)) {
      throw new TypeError('The passed array contains not just numbers.')
    }
  })
}

function maximum (numbers) {
  checkValidArgument(numbers)
  return numbers.reduce((a, b) => Math.max(a, b))
}

function mean (numbers) {
  checkValidArgument(numbers)
  return numbers.reduce((sum, next) => sum + next, 0) / numbers.length
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = undefined
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined
