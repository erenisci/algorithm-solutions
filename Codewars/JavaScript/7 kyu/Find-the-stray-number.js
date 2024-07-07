function stray(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] !== numbers[1] ? numbers[0] : numbers.pop();
}
