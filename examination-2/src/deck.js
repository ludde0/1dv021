'use strict'

const Card = require('./card')
const Constants = require('./constants')

class Deck {
  constructor () {
    this._cards = []
    for (let cardNumber = Constants.minNumber; cardNumber <= Constants.maxNumber; cardNumber++) {
      this._cards.push(new Card(Constants.heart, cardNumber))
      this._cards.push(new Card(Constants.spade, cardNumber))
      this._cards.push(new Card(Constants.club, cardNumber))
      this._cards.push(new Card(Constants.diamond, cardNumber))
    }
  }

  drawCard () {
    if (this._cards.length === 0) {
      throw new Error('No more cards left in the deck.')
    }

    // Get the first card from the deck.
    const card = this._cards[0]
    // Remove the first card from the deck.
    this._cards.splice(0, 1)
    return card
  }

  shuffle () {
    for (let i = this._cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this._cards[i]
      this._cards[i] = this._cards[j]
      this._cards[j] = temp
    }
  }

  toString () {
    let result = ''
    for (let cardIndex = 0; cardIndex < this._cards.length; cardIndex++) {
      result += this._cards[cardIndex].toString() + ' '
    }
    return result
  }
}

module.exports = Deck
