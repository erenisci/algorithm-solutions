function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (match, offset) => offset + 1);
}
