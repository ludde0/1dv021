/**
 * The starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const determinator = require('./src/determinator')

console.log(determinator.tellType('Hasta la vista, baby.'))
console.log(determinator.tellType(true)) // outputs 'You sent me a boolean.'
console.log(determinator.tellType(42))
console.log(determinator.tellType({})) // outputs 'You sent me an object.'
console.log(determinator.tellType([1, 2])) // outputs 'You sent me an array.'
console.log(determinator.tellType(null))
console.log(determinator.tellType(function () {})) // outputs 'You sent me a function.'
console.log(determinator.tellType()) // outputs 'You sent me an undefined value.'
