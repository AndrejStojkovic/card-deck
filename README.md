#### english

# Card Deck
 
Small project I made in 30 minutes just for fun. :P

## How does it work?
Well, first you open the site link below, then you enter how many cards to generate, you click 'Generate' and it shows you a list of cards. Simple!

The script **card-deck.js** contains 2 classes (Card and Deck).  
Class **Card** contains only a constructor that has 2 inputs (suit and value)  
Class **Deck** contains a constructor that creates an empty array, 3 functions(createDeck, shuffle, deal)  

### How to use the card-deck.js?

Well first of all, you have to create a new js file or just simple write in a <script> tag.

```javascript
var deck = new Deck(); // Creates an empty deck;
var num = 4;
deck.createDeck(suits, values); // Takes from the arrays 'suits' and 'values' from card-deck.js and creates an array of cards (52)
deck.shuffle(); // Shuffles the deck once. To shuffle it more than once you can use 'deck.shuffleDeck(num)'
//deck.shuffleDeck(3);
var cards = deck.deal(num); // 'num' is a variable and should take an integer (1 <= num <= 52)
// Print out the dealt cards
for(var i = 0; i < cards.length; i++)
    console.log(cards[i].value + ' of ' + cards[i].suit);

```

### Known bugs:
- The site is not optimized very well for mobile and etc.. 
 
Link to website:
