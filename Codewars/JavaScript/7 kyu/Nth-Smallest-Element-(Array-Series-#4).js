function nthSmallest(arr, pos) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[pos - 1];
}
