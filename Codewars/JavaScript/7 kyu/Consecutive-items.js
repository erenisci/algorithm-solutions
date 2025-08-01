function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
}
