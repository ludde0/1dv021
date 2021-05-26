/**
 * Bugsy module.
 *
 * @module src/bugsy
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mostWanted = require('./mostWanted')

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {string} initials The initials of the full name to be found.
 * @returns {string} The first full name found matching the initials.
 */
function getGangster (initials) {
  // TODO: Fix the bug(s) in this function to get the tests to pass.
  const names = mostWanted.getNames()
  let name

  do {
    name = names.next().value
    if (name) {
      if (initials === mostWanted.getInitials(name)) {
        return name
      }
    }
  } while (name)

  return 'No suspect found!'
}

exports.getGangster = getGangster
