/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints (teams) {
  if (!Array.isArray(teams)) {
    throw new TypeError('Parameter is not an array');
  }

  const result = teams.slice()
  return result.sort(function (a, b) { return b.points - a.points })
}

module.exports.sortByPoints = sortByPoints
