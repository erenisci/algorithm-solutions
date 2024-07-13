function defineSuit(card) {
  const cards = {
    9824: 'spades',
    9827: 'clubs',
    9829: 'hearts',
    9830: 'diamonds',
  };
  return cards[card[card.length - 1].charCodeAt(0)];
}
