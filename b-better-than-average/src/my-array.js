/**
 * my-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {object[]} students
 * @returns {string[]}
 */
function filterBetterThanAverage (students) {
  if (!Array.isArray(students)) {
    throw new TypeError('The argument is not an array!')
  }
  let sum = 0
  students.forEach(element => {
    sum += element.points
  })

  const average = sum / students.length
  const betterThanAverage = students.filter(current => current.points >= average)
  const result = []

  betterThanAverage.forEach(e => {
    result.push(e.name)
  })

  return result
}

exports.filterBetterThanAverage = filterBetterThanAverage
