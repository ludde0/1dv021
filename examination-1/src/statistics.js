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
    mean: mean(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    mode: mode(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers)
  }
}

function checkValidArgument (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  numbers.forEach(function (element) {
    if (!(typeof element === 'number')) {
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

function median (numbers) {
  checkValidArgument(numbers)

  // We get an ascending sorted list of numbers.
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  let middleIndex
  if (sortedNumbers.length % 2 === 1) {
    // Length of array is odd. We return the number in the middle position of the array.
    middleIndex = Math.floor(sortedNumbers.length / 2)
    return sortedNumbers[middleIndex]
  } else {
    // Length of array is even. We return mean value of the the two numbers in
    // the middle of the array.
    middleIndex = sortedNumbers.length / 2
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
  }
}

function minimum (numbers) {
  checkValidArgument(numbers)
  return numbers.reduce((a, b) => Math.min(a, b))
}

function mode (numbers) {
  checkValidArgument(numbers)
  return []
}

function range (numbers) {
  checkValidArgument(numbers)

  // We get an ascending sorted list of numbers.
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)

  // The result retruned is the difference between the highest and the lowest value.
  return sortedNumbers[numbers.length - 1] - sortedNumbers[0]
}

function standardDeviation (numbers) {
  checkValidArgument(numbers)

  // Calculate mean value.
  const m = mean(numbers)
  let sum = 0

  // Calculate square of difference for each number and add to a sum.
  numbers.forEach(function (x) {
    sum += Math.pow(x - m, 2)
  })

  // Finally calculate the standard deviation.
  return Math.sqrt(sum / numbers.length)
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = mode
exports.range = range
exports.standardDeviation = standardDeviation
