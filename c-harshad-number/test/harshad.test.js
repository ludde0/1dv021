/**
 * Tests for the harshad module.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const harshad = require('../src/harshad')
const expect = require('chai').expect

describe('isValid', () => {
  it('Passing the argument 10 should return true', done => {
    expect(harshad.isValid(10)).to.equal(true)
    done()
  })

  it('Passing the argument 24 should return true', done => {
    expect(harshad.isValid(24)).to.equal(true)
    done()
  })

  it('Passing the argument 198 should return true', done => {
    expect(harshad.isValid(198)).to.equal(true)
    done()
  })

  it('Passing the argument 17 should return false', done => {
    expect(harshad.isValid(17)).to.equal(false)
    done()
  })

  it('Passing the argument 349 should return false', done => {
    expect(harshad.isValid(349)).to.equal(false)
    done()
  })

  it('Passing the argument 1197 should return false', done => {
    expect(harshad.isValid(1197)).to.equal(false)
    done()
  })
})

describe('getNext', () => {
  it('Passing the argument 14 should return 18', done => {
    expect(harshad.getNext(14)).to.equal(18)
    done()
  })

  it('Passing the argument 65 should return 70', done => {
    expect(harshad.getNext(65)).to.equal(70)
    done()
  })

  it('Passsing the argument 10 should return 12', done => {
    expect(harshad.getNext(10)).to.equal(12)
    done()
  })
})

describe('getSequence', () => {
  it('Passing the arguments 4 and 1200 should return [1204, 1206, 1212, 1215]', done => {
    expect(harshad.getSequence(4, 1200)).to.eql([1204, 1206, 1212, 1215])
    done()
  })

  it('Passing the argument 3 should return [1, 2, 3]', done => {
    expect(harshad.getSequence(3)).to.eql([1, 2, 3])
    done()
  })
})
