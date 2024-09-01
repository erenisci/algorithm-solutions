function recaman(n) {
  const sequence = [0];
  const seen = new Set(sequence);

  for (let i = 1; i <= n; i++) {
    const prev = sequence[i - 1];
    const nextValue = prev - i;

    if (nextValue > 0 && !seen.has(nextValue)) {
      sequence.push(nextValue);
      seen.add(nextValue);
    } else {
      const nextValuePlus = prev + i;
      sequence.push(nextValuePlus);
      seen.add(nextValuePlus);
    }
  }

  return sequence[n];
}
