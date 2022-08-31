class Deck {
  constructor(flashcards) {
    
    this.cards = flashcards.prototypeData;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
