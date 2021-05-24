/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me '

  // Null must be handled different. Not handled with operator "typeof".
  if (data === null) {
    result += 'a null value.'
  // Array must also be handled different. Not handled with operator "typeof".
} else if (Array.isArray(data)) {
    result += 'an array.'
  } else if (typeof data === 'undefined') {
    result += 'an undefined value.'
  } else {
    switch (typeof data)
    {
      case 'string' :
      case 'boolean' :
      case 'number' :
      case 'function' :
        result += 'a '
        break
      case 'object' :
        result += 'an '
        break
      default :
        result += 'an unhandled type: '
    }
    result += typeof data + '.'
  }

  return result
}

exports.tellType = tellType
