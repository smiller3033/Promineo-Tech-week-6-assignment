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

//defines the face of a playing card
function defineFace(value) {
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

//This is a singular playing card
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.face = defineFace(value);
    }
}

//Deck of playing cards
class Deck {
    constructor() {
        this.cards = [];
    }

    initializeDeck() {
        let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
        let suit;
        let cards = [];
        for (let i = 0; i < 4; i++) {
            suit = suits[i];
            for (let j = 2; j < 15; j++) {
                cards.push(new Card(j, suit));
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
        this.score = 0;
    }
}

//Game of WAR
class War {
    constructor() {
        this.player1 = new Player("Jeff");
        this.player2 = new Player("Martha");
        this.deck = new Deck();
        this.deck.initializeDeck();
    }

    deal() {
        let card1;
        let card2;
        for (let i = 0; i < 26; i++) {
            card1 = this.deck.cards.pop();
            card2 = this.deck.cards.pop();

            this.player1.playingCards.push(card1);
            this.player2.playingCards.push(card2);
        }
    }

    play() {
        let card1 = this.player1.playingCards.pop();
        let card2 = this.player2.playingCards.pop();
        let msg = `Player 1 plays ${card1.face} of ${card1.suit}
        Player 2 plays ${card2.face} of ${card2.suit}
        `

        if (card1.value > card2.value) {
            this.player1.score++;
            return msg + "Player 1 Wins Round"
        }
        else if (card1.value < card2.value) {
            this.player2.score++;
            return msg + "Player 2 Wins Round"
        }
        else {
            return msg + "Tie Round"
        }
    }

    end() {
        if (this.player1.score > this.player2.score) {
            return "Player 1 Wins!"
        }
        else if (this.player1.score < this.player2.score) {
            return "Player 2 Wins!"
        }
        else {
            return "Tie!"
        }
    }
}

let card = new Card(14, "Spades");

console.log(card.face);

/*
//initialize game and deal
let game = new War();
game.deal()

//play game
let gameMsg;
for (let i = 0; i < 26; i++) {
    console.log("ROUND " + (i + 1));
    gameMsg = game.play();
    console.log(gameMsg);
}

//determine winner
results = game.end();d
console.log(results);
*/