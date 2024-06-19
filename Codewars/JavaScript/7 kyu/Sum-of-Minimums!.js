function sumOfMinimums(arr) {
  return arr.reduce((s, subArr) => s + Math.min(...subArr), 0);
}
