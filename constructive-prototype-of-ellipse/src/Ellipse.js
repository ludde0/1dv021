'use strict'

function Ellipse (a, b) {
  this.a = a
  this.b = b
}

Ellipse.prototype.getArea = function () {
  return Math.PI * this.a * this.b
}

Ellipse.prototype.getCircumference = function () {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
}

Ellipse.prototype.toString = function () {
  return 'a: ' + this.a.toFixed(1) + ', b: ' + this.b.toFixed(1) + ', area: ' +
    this.getArea().toFixed(1) + ', circumference: ' + this.getCircumference().toFixed(1)
}

module.exports = Ellipse
