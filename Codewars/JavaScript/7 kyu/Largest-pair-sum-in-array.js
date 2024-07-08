function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(numbers.length - 2)
    .reduce((a, b) => a + b, 0);
}
