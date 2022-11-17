// Shuffle function taken from StackOverflow
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
//This is a singular playing card
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.face = defineFace(value);
    }

    //Defines the face of the card by the given value
    defineFace(value) {
        if (value === 2) {
            return "Two";
        }
        else if (value === 3) {
            return "Three";
        }
        else if (value === 4) {
            return "Four";
        }
        else if (value === 5) {
            return "Five";
        }
        else if (value === 6) {
            return "Six";
        }
        else if (value === 7) {
            return "Seven";
        }
        else if (value === 8) {
            return "Eight";
        }
        else if (value === 9) {
            return "Nine";
        }
        else if (value === 10) {
            return "Ten";
        }
        else if (value === 11) {
            return "Jack";
        }
        else if (value === 12) {
            return "Queen";
        }
        else if (value === 13) {
            return "King";
        }
        else if (value === 14) {
            return "Ace";
        }
    }
}

//Deck of playing cards
class Deck {
    constructor() {
        this.cards = initializeDeck();
    }

    initializeDeck() {
        let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
        let suit;
        let cards = [];
        for (let i = 0; i < 4; i++) {
            suit = suits[i];
            for (let j = 2; j < 15; j++) {
                cards.push(Card(j, suit));
            }
        }
        shuffle(cards);
        return cards;
    }
}

//Player of the game
class Player {
    constructor(name) {
        this.name = name;
        this.playingCards = [];
    }
}

//Game of WAR
class War {
    constructor() {
        this.player1 = Player("Jeff");
        this.player2 = Player("Martha");
        this.deck = Deck();
    }

    deal() {
        let card1;
        let card2;
        for (let i = 0; i < 26; i++) {
            card1 = deck.cards.pop();
            card2 = deck.cards.pop();

            this.player1.playingCards.push(card1);
            this.player2.playingCards.push(card2);
        }
    }

    
}