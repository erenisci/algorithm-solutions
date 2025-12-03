function bingo(a) {
  return [2, 9, 14, 7, 15].every(n => a.includes(n)) ? 'WIN' : 'LOSE';
}
