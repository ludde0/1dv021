'use strict'

const Circle = require('./src/circle')
const Ellipse = require('./src/Ellipse')

const ellipse = new Ellipse(42.7, 13.8)
console.log(ellipse.toString())

ellipse.a = 68
ellipse.b = 18.4
console.log(ellipse.toString())

ellipse.a = 78.9
ellipse.b = 68.4
console.log(ellipse.toString())

const circle = new Circle(6.7)
console.log(circle.toString())

circle.radius = 3.8
console.log(circle.toString())
