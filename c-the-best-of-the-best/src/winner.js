/**
 * Winner module.
 *
 * @module src/winner
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Analyze the array with names and returns an object where the frequency of the name is showing.
 *
 * @param {string[]} source
 * @returns {Object.<string, number>} - The object as example: {mats: 1, john: 3}
 */
function getFrequenciesOfNames (source) {
  if (!Array.isArray(source)) {
    throw new TypeError('The argument is not an array.')
  }

  const obj = {}

  source.forEach(function (element) {
    const loCase = element.toLowerCase()
    if (obj[loCase] === undefined) {
      obj[loCase] = 1
    } else {
      obj[loCase]++
    }
  })
  return obj
}

/**
 * Takes an object with names and values and returns the name(s) with the highest count.
 *
 * @param {Object.<string, number>} obj
 * @returns {string[]}
 */
function getMostFrequentNames (obj) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const max = Math.max(...values)
  const result = []

  for (let i = 0; i < keys.length; i++) {
    if (values[i] === max) {
      result.push(keys[i])
    }
  }
  return result
}

/**
 * Sorts an array with strings in ascending order.
 *
 * @param {string[]} source
 * @returns {string[]}
 */
function sortNamesAscending (source) {
  return source.slice().sort()
}

/**
 * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
 * frequent.
 *
 * @param {string[]} source An array with all the winners.
 * @returns {string[]} An array with the most frequent winners.
 */
function getNamesOfWinners (source) {
  // ---------------------------------------
  // Do not change the code in this function!
  // ---------------------------------------
  const frequencies = getFrequenciesOfNames(source)
  const names = getMostFrequentNames(frequencies)

  return sortNamesAscending(names)
}

// Exports
exports.getFrequenciesOfNames = getFrequenciesOfNames
exports.getMostFrequentNames = getMostFrequentNames
exports.sortNamesAscending = sortNamesAscending
exports.getNamesOfWinners = getNamesOfWinners
