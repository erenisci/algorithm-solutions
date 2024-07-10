function findDigit(num, nth) {
  if (nth <= 0) return -1;
  num = String(Math.abs(num)).padStart(nth, '0');
  return +num[num.length - nth];
}
