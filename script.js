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
let paragraph = document.getElementById('paragraph-1');
    button1 = document.getElementById('btn-new'),
    button2 = document.getElementById('btn-hit'),
    button3 = document.getElementById('btn-stay');

button2.style.display = 'none';
button3.style.display = 'none';
showStatus();

//Starting new game
button1.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  
  deck = createNewDeck();
  playerCards = [getNextCard(),getNextCard()];
  dealerCards = [getNextCard(),getNextCard()];
  
  button1.style.display = 'none';
  button2.style.display = 'inline';
  button3.style.display = 'inline';
  showStatus();
});

let suits = ["Spades", "Hearts", "Club", "Diamonds"];
let values = ["King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven",
              "Six", "Five", "Four", "Three","Two", "Ace"];

//When game starts, a new deck is generated
function createNewDeck(){
  let deck = []; 
  for(let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++){
    for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
      
      //creating an object
      let card = {
        suit : suits[suitsIdx],
        value : values[valuesIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

/*function getRandomDeck(card){
  let randomDeck = [Math.floor(Math.random() * deck.length)];
  return randomDeck;
}
*/

function printCardString(card){
  return card.value + " of " + card.suit;
}

function getNextCard(){
  return deck.shift();
}

function showStatus(){
  if(!gameStarted){
    paragraph.style.display = 'block';
  }
  return;
}


console.log("Welcome to Blackjack!");
console.log("You have been dealt: ");
console.log( printCardString(playerCards[0]));
console.log( printCardString(playerCards[1]));