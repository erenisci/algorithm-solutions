function lastDigit(n, d) {
  if (d <= 0) return [];

  const digits = String(Math.abs(n)).split('').map(Number);

  if (d >= digits.length) return digits;

  return digits.slice(-d);
}
