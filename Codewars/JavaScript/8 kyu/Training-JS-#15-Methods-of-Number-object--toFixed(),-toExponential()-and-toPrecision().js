function howManySmaller(arr, n) {
  const roundedArr = arr.map(num => parseFloat(num.toFixed(2)));
  const count = roundedArr.reduce((acc, num) => acc + (num < n ? 1 : 0), 0);
  return count;
}
