function maxProduct(numbers, size) {
  const sortedNumbers = numbers.sort((a, b) => b - a);
  const maxNumbers = sortedNumbers.slice(0, size);
  return maxNumbers.reduce((product, num) => product * num, 1);
}
