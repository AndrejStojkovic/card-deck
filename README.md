# Card Deck
 
Small project I made in 30 minutes just for fun. :P

## How does it work?
Well, first you open the site link below, then you enter how many cards to generate, you click 'Generate' and it shows you a list of cards. Simple! :D 

The script **card-deck.js** contains 2 classes (Card and Deck).
Class **Card** contains only a constructor that has 2 inputs (suit and value)
Class **Deck** contains a constructor that creates an empty array, 3 functions(createDeck, shuffle, deal)

### How to use the card-deck.js?

Well first of all, you have to create a new js file or just simple write in a <script> tag.

```javascript
var deck = new Deck(); // creates an empty deck;
deck.createDeck(suits, values); // Takes from the arrays 'suits' and 'values' from card-deck.js and creates an array of cards (52)
deck.shuffle(); // Shuffles the deck once. To shuffle it more than once you can use 'deck.shuffleDeck(num)'
var cards = deck.deal(num); // 'num' is a variable and should take an integer, num < 52 && num > 1
var k = 0;
// Print out the dealt cards
while(k < cards.length) {
    console.log(cards[k].value + ' of ' + cards[k].suit);
    k--;
}

```

### Known bugs:
- Not optimized very well for mobile and etc.. 
 
Link to website:
