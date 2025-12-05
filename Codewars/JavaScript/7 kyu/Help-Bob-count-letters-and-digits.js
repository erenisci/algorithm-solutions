function countLettersAndDigits(input) {
  let count = 0;

  for (const ch of input) {
    if (/[A-Za-z0-9]/.test(ch)) {
      count++;
    }
  }

  return count;
}
