/**
 * Harshad module.
 *
 * @module src/harshad
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
* Returns true when the given number is a valid Harshad number.
*
* @param {number} number The given number.
* @returns {boolean}
*/
function isValid (number) {
  // Convert number to a string.
  const strNumber = number.toString()
  const digits = []
  for (let i = 0; i < strNumber.length; i++) {
    digits.push(parseInt(strNumber[i], 10))
  }
  const digitSum = digits.reduce((a, b) => a + b)

  return number % digitSum === 0
}

/**
* Gets the next Harshad number after the given number.
*
* @param {number} number The given number.
* @returns {number}
*/
function getNext (number) {
  let nextNumber = number + 1
  while (!isValid(nextNumber)) {
    nextNumber++
  }
  return nextNumber
}

/**
* Returns a sequence of Harshad numbers, starting after a given number.
*
* @param {number} count The number of consecutive Harshad numbers to return.
* @param {number} [start = 0] The number after which the sequence should start; defaults to 0.
* @returns {number[]}
*/
function getSequence (count, start = 0) {
  let numbersFound = 0
  let number = start
  const result = []
  while (numbersFound < count) {
    number = getNext(number)
    result.push(number)
    numbersFound++
  }

  return result
}

// Exports
module.exports.isValid = isValid
module.exports.getNext = getNext
module.exports.getSequence = getSequence
