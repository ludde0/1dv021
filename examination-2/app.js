'use strict'

const Deck = require('./src/deck')
const Player = require('./src/player')

const noOfPlayers = 2
const playerStopsAt = 17
const dealerStopsAt = 18
const players = []

// Create a deck and shuffle it.
const deck = new Deck()
deck.shuffle()

// Create players and let them draw one card.
for (let playerIndex = 0; playerIndex < noOfPlayers; playerIndex++) {
  players.push(new Player(deck, playerStopsAt))
  players[playerIndex].drawOneCard()
}

// Create the dealer.
const dealer = new Player(deck, dealerStopsAt)

for (let playerIndex = 0; playerIndex < noOfPlayers; playerIndex++) {
  // Let a player draw cards until he is satisfied.
  players[playerIndex].drawCards()

  // Check if the player has unbeatable cards.
  let playerWins = players[playerIndex].hasWinnerCards

  // Output the players cards.
  console.log('Player #' + (playerIndex + 1).toString() + ': ' + players[playerIndex].toString())

  if (playerWins || players[playerIndex].isBusted) {
    // Dealer do not have to draw any cards.
    console.log('Dealer   : -')
  } else {
    // Dealer draws cards until he is satisfied.
    dealer.clearCards()
    dealer.drawCards()

    // Output the dealers cards.
    console.log('Dealer   : ' + dealer.toString())
    playerWins = dealer.isBusted || (dealer.sum < players[playerIndex].sum)
  }

  if (playerWins) {
    console.log('Player #' + (playerIndex + 1).toString() + ' wins!')
  } else {
    console.log('Dealer wins!')
  }
}
