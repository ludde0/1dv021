'use strict'

const minNumber = 1
const maxNumber = 13
const heart = 'heart'
const spade = 'spade'
const club = 'club'
const diamond = 'diamond'

function Card (suit = heart, number = 1) {
  this.suit = suit
  this.number = number
}

Object.defineProperty(Card.prototype, 'suit', {
  get: function () {
    return this._suit
  },
  set: function (value) {
    if (!(value === heart || value === spade || value === club || value === diamond)) {
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
    if (value < minNumber || value > maxNumber) {
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
    case heart:
      suitStr = '♥'
      break
    case spade:
      suitStr = '♠'
      break
    case club:
      suitStr = '♣'
      break
    case diamond:
      suitStr = '♦'
      break
    default:
      throw new Error('Not possible suit value.')
  }

  return numberStr + suitStr
}

module.exports = Card
