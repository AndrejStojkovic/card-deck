const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value))
            }
        }
        return this.deck;
    }

    shuffle() {
        let count = this.deck.length;
        let temp, x;

        while(count) {

            x = Math.floor(Math.random() * count--);
            temp = this.deck[count];
            this.deck[count] = this.deck[x];
            this.deck[x] = temp;
        }
    }

    shuffleDeck(num) {
        while(num > 0) {
            let count = this.deck.length;
            let temp, x;
    
            while(count) {
    
                x = Math.floor(Math.random() * count--);
                temp = this.deck[count];
                this.deck[count] = this.deck[x];
                this.deck[x] = temp;
            }
            num--;
        }
    }

    deal(cardNum) {
        let hand = [];
        while(hand.length < cardNum) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
}