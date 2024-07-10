function findShort(s) {
  return Math.min(...s.split(' ').map(str => str.length));
}
