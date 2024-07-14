function evil(n) {
  return n
    .toString(2)
    .split('')
    .reduce((acc, cur) => acc + (cur === '1' ? 1 : 0), 0) %
    2 ===
    0
    ? "It's Evil!"
    : "It's Odious!";
}
