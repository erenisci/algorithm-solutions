function minimumSteps(numbers, value) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
    if (sum >= value) return i;
  }
}
