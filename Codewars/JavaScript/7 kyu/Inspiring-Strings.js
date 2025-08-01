function longestWord(stringOfWords) {
  return stringOfWords.split(' ').reduce((acc, cur) => (cur.length >= acc.length ? cur : acc), '');
}
