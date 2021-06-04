'use strict'

const Card = require('./Card')
const heart = require('./Card')
const spade = require('./Card')
const club = require('./Card')
const diamond = require('./Card')

class Deck {
  constructor () {
    this._cards = []
    for (let card = 1; card <= 13; card++) {
      this._cards.push(new Card(heart, card))
    }

    for (let card = 1; card <= 13; card++) {
      this._cards.push(new Card(spade, card))
    }

    for (let card = 1; card <= 13; card++) {
      this._cards.push(new Card(club, card))
    }

    for (let card = 1; card <= 13; card++) {
      this._cards.push(new Card(diamond, card))
    }
  }

  drawCard () {
    const cardIndex = Math.floor(Math.random() * this._cards.length)
    const element = this._cards[cardIndex]
    this._cards.splice(cardIndex, 1)
    return element
  }

  shuffle () {
    for (let i = this._cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this._cards[i]
      this._cards[i] = this._cards[j]
      this._cards[j] = temp
    }
  }
}

module.exports = Deck
