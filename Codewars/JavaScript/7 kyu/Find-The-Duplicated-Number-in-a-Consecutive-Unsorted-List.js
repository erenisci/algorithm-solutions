function findDup(arr) {
  return arr.reduce((a, b) => a + b, 0) - [...new Set(arr)].reduce((a, b) => a + b, 0);
}
