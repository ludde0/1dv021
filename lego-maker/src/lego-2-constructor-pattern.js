/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick (x = 2, y = 4, color = 'red') {
  this.x = x
  this.y = y
  this.color = color

  this.render = function() {
    console.log(this.toString())
  }

  this.toString = function () {
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
