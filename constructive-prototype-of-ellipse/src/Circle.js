'use strict'

const Ellipse = require("./Ellipse")

function Circle (radius) {
  Ellipse.call(this, radius, radius)

  Object.defineProperty(this, 'radius', {
    get: function () {
      return this.a
    },
    set: function (value) {
      this.a = value
      this.b = value
    }
  })
}

Circle.prototype = Object.create(Ellipse.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.toString = function () {
  return 'radius: ' + this.a.toFixed(1) + ', area: ' +
      this.getArea().toFixed(1) + ', circumference: ' + this.getCircumference().toFixed(1)
}

module.exports = Circle
