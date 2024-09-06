function sumEvenNumbers(input) {
  return input.reduce((acc, cur) => acc + (cur % 2 ? 0 : cur), 0);
}
