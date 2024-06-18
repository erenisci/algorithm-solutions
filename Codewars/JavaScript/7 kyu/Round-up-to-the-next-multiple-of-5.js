function roundToNext5(n) {
  return n % 5 === 0 ? n : (Math.floor(n / 5) + 1) * 5;
}
