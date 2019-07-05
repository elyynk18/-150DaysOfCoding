/*This is a Blackjack Game Application
  by Esther Kanyang'onda
  Copyright 2019

--------A R R A Y S------------
      Array features

>values.length - # of elements in the array
>values.push - adds on to the array
>values.pop - removes the last item on the array
>values.shift - removes the first item of the array
and moves all items down one index

>>values.splice(i, #OfValues to delete); 
  eg values.splice(2,3) would delete the item at index
  2 and the next 2 items for a total of 3.
  values.splice can also be used to add items to the
  array after deleting eg 
  values.splice(2,3,12,1,4) would delete the item at index
  2 and the next 2 items for a total of 3 then add
  items 12, 1 & 4.

  --------TRUTHY/FALSY VALUES------
Falsy values - false, 0, ""(empty strings), null, undefined, NaN
Truthy values - true, num>0, "0"
*/

//Game Variables
let gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

//DOM Variables
let paragraph = document.getElementById('game-status');
button1 = document.getElementById('new-btn'),
  button2 = document.getElementById('hit-btn'),
  button3 = document.getElementById('stay-btn');

button2.style.display = 'none';
button3.style.display = 'none';
showStatus();

//Starting new game
button1.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;

  deck = createNewDeck();
  shuffleDeck(deck);
  playerCards = [shiftNextCard(), shiftNextCard()];
  dealerCards = [shiftNextCard(), shiftNextCard()];

  button1.style.display = 'none';
  button2.style.display = 'inline';
  button3.style.display = 'inline';
  showStatus();
});

let suits = ["Spades", "Hearts", "Club", "Diamonds"];
let values = ["King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven",
  "Six", "Five", "Four", "Three", "Two", "Ace"
];

//When game starts, a new deck is generated
function createNewDeck() {
  let deck = [];
  for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
    for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {

      //creating an object
      let card = {
        suit: suits[suitsIdx],
        value: values[valuesIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function printCardString(card) {
  return card.value + " of " + card.suit;
}

function updateScores() {
  return ;
}

function shiftNextCard(card) {
  return deck.shift();
}

function showStatus() {
  if (!gameStarted) {
    paragraph.style.display = 'block';
    return;
  }

let dealerCardString = ' ';
  for(let i=0; i < dealerCards.length; i++){
    dealerCardString += printCardString(dealerCards[i]) + '\n';
  }
  
let playerCardString = ' ';
  for(let i=0; i < playerCards.length; i++){
    playerCardString += printCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  paragraph.innerText = "Dealer has: \n" +
                         dealerCardString + 
                         'Score: ' + dealerScore + ')\n'
  
//This prints out the shuffled deck
  /*for (let i = 0; i < deck.length; i++) {
    paragraph.innerText += '\n' + printCardString(deck[i]);
  }*/

}

console.log("Welcome to Blackjack!");
console.log("You have been dealt: ");
