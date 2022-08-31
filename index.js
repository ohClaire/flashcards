const flashcards = require('./src/data');
const Deck = require('./src/Deck');
const Game = require('./src/Game');
const Round = require('./src/Round');


console.log('Your project is running...'); 


const deck = new Deck(flashcards);
const round = new Round(deck);
const game = new Game(round);
game.start();