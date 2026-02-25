function freqSeq(str, sep) {
  const counts = {};

  for (const char of str) counts[char] = (counts[char] || 0) + 1;

  return str
    .split('')
    .map(char => counts[char])
    .join(sep);
}
