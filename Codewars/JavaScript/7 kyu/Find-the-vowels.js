function vowelIndices(word) {
  return word
    .toLowerCase()
    .split('')
    .map((ch, index) => (ch.match(/[aeiouy]/) ? index + 1 : null))
    .filter(ch => ch !== null);
}
