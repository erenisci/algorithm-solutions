function sortIt(arr) {
  const ht = {};
  arr.forEach(x => (ht[x] = (ht[x] || 0) + 1));

  return arr.slice().sort((x, y) => ht[x] - ht[y] || y - x);
}
