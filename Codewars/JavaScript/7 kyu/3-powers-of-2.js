function threePowers(n) {
  return n > 2 && n.toString(2).split('0').join('').length < 4;
}
