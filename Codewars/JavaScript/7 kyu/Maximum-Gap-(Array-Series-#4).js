function maxGap(numbers) {
  if (numbers.length < 2) return 0;

  numbers.sort((a, b) => a - b);
  let gap = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i + 1] - numbers[i];
    if (diff > gap) gap = diff;
  }

  return gap;
}
