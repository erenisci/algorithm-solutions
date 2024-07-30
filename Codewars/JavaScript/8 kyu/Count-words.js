function countWords(str) {
  return str.split(/\s/).filter(el => el).length;
}
