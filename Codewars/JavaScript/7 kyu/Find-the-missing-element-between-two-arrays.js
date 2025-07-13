function findMissing(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) - arr2.reduce((a, b) => a + b, 0);
}
