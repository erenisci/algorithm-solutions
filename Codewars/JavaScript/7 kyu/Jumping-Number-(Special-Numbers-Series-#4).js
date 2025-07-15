function jumpingNumber(n) {
  const digits = String(n);
  if (digits.length === 1) return 'Jumping!!';

  for (let i = 0; i < digits.length - 1; i++) {
    const diff = Math.abs(+digits[i] - +digits[i + 1]);
    if (diff !== 1) return 'Not!!';
  }

  return 'Jumping!!';
}
