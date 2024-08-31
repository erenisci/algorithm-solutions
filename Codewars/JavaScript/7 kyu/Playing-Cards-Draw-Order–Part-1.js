function draw(deck) {
  const result = [];
  while (deck.length > 0) {
    result.push(deck.shift());

    if (deck.length > 0) deck.push(deck.shift());
  }
  return result;
}
