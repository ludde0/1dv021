'use strict'

const maxSum = 21
const maxNoOfCards = 5

class Player {
  constructor (deck, minSum = 17) {
    this._deck = deck
    this._minSum = minSum
    this._cards = []
  }

  get containsAce () {
    return this._cards.includes(1)
  }

  get hasWinnerCards () {
    return this.sum === maxSum || (this._cards.length === maxNoOfCards && this.sum < maxSum)
  }

  get isBusted () {
    return this.sum > maxSum
  }

  get sum () {
    if (this._cards.length === 0) {
      return 0
    } else {
      let sum = this._cards.reduce((a, b) => a + b.number, 0)
      if (this.containsAce) {
        const highSum = sum + 13 // One ace counts as value 14
        if (highSum <= maxSum) {
          sum = highSum
        }
      }
      return sum
    }
  }

  clearCards() {
    this._cards = []
  }

  drawCards () {
    do {
      this._cards.push(this._deck.drawCard())

      // Is the sum acceptable? Shall we stop?
      if (this.sum >= this._minSum) {
        break
      }

      // Is the sum to high already?
      if (this.isBusted) {
        break
      }
    } while (this._cards.length < maxNoOfCards)
  }

  drawOneCard () {
    this._cards.push(this._deck.drawCard())
  }

  toString () {
    let result = ''
    for (let cardIndex = 0; cardIndex < this._cards.length; cardIndex++) {
      result += this._cards[cardIndex].toString() + ' '
    }
    result += '(' + this.sum.toString() + ')'
    if (this.isBusted) {
      result += ' BUSTED!'
    }
    return result
  }
}

module.exports = Player
