/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents a lego brick.
 */
class LegoBrick {
  constructor (x = 2, y = 4, color = 'red')
  {
    this.x = x
    this.y = y
    this.color = color
  }

  render () {
    console.log(this.toString())
  }

  toString () {
    let result = ''
    for (let row = 0; row < this.y; row++) {
      for (let col = 0; col < this.x; col++) {
        result += '®'
        if (col < this.x - 1) {
          result += ' '
        }
      }
      if (row < this.y - 1) {
        result += '\n'
      }
    }
    return result
  }
}

// Exports
module.exports = LegoBrick
