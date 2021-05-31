/**
 * Module for lego part 1.
 *
 * @module src/lego-1-factory-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - Color of the brick ('blue', 'red', 'green', etc.).
 * @returns {object} obj - Object representing a brick.
 * @returns {number} obj.x - Horizontal number of horizontal nobs of the brick.
 * @returns {number} obj.y - Vertical number of vertical nobs of the brick.
 * @returns {string} obj.color - Color of the brick.
 * @returns {function} obj.toString - A function returning a string representing the object.
 * @returns {function} obj.render - A function rendering the object.
 */
const createLegoBrick = function (x = 2, y = 4, color = 'red') {
  const obj = {
    x: x,
    y: y,
    color: color,
    render: function () {
      console.log(this.toString())
    },
    toString: function () {
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

  return obj
}

// Exports
module.exports.createLegoBrick = createLegoBrick
