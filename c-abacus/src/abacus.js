/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
function add (varArgs) {
  // Utilize the 'arguments' object here, not the 'varArgs' parameter.
  const args = Array.from(arguments)
  let sum = 0
  args.forEach(element => {
    if (typeof element === 'number') {
      sum += element
    } else if (typeof element === 'string') {
      const strNumber = element.replace(',', '.')
      sum += Number.parseFloat(strNumber)
      if (isNaN(sum)) {
        throw new TypeError('At least one of the arguments can\'t be parsed as a number.')
      }
    } else if (Array.isArray(element)) {
      for (let index = 0; index < element.length; index++) {
        sum += add(element[index])
      }
    } else {
      throw new TypeError('At least one of the arguments can\'t be parsed as a number.')
    }
  })

  return sum
}

module.exports.add = add
