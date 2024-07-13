function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  let a = 0,
    b = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) a++;
    else b += input[i];
  }
  return [a, b];
}
