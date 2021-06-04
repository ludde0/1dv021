'use strict'

const Constants = require('./constants')

function Card (suit = Constants.heart, number = Constants.minNumber) {
  this.suit = suit
  this.number = number
}

Object.defineProperty(Card.prototype, 'suit', {
  get: function () {
    return this._suit
  },
  set: function (value) {
    if (!(value === Constants.heart || value === Constants.spade || 
        value === Constants.club || value === Constants.diamond)) {
      throw new Error('Suit is not valid.')
    }
    this._suit = value
  }
})

Object.defineProperty(Card.prototype, 'number', {
  get: function () {
    return this._number
  },
  set: function (value) {
    if (value < Constants.minNumber || value > Constants.maxNumber) {
      throw new Error('Number must be in interval 1-13.')
    }
    this._number = value
  }
})

Card.prototype.toString = function () {
  let numberStr = ''
  let suitStr = ''

  switch (this._number) {
    case 1:
      numberStr = 'A'
      break
    case 11:
      numberStr = 'J'
      break
    case 12:
      numberStr = 'D'
      break
    case 13:
      numberStr = 'K'
      break
    default:
      numberStr = this._number.toString()
  }

  switch (this.suit) {
    case Constants.heart:
      suitStr = '♥'
      break
    case Constants.spade:
      suitStr = '♠'
      break
    case Constants.club:
      suitStr = '♣'
      break
    case Constants.diamond:
      suitStr = '♦'
      break
    default:
      throw new Error('Not possible suit value.')
  }

  return numberStr + suitStr
}

module.exports = Card
