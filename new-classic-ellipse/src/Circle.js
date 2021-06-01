'use strict'

const Ellipse = require("./Ellipse")

class Circle extends Ellipse {
  constructor (radius) {
    super(radius, radius)
}

  get radius () {
    return this.a
  }

  set radius (value) {
    this.a = value
    this.b = value
  }

  toString () {
    return 'radius: ' + this.a.toFixed(1) + ', area: ' +
        this.getArea().toFixed(1) + ', circumference: ' + this.getCircumference().toFixed(1)
  }
}

module.exports = Circle
