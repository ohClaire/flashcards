const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck(flashcards.prototypeData);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have a deck of cards', () => {
    expect(deck.cards).to.deep.equal(flashcards.prototypeData); 
  });
  
  it('should count how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(30);
  });
})