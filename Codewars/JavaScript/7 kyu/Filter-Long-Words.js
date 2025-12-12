function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(word => word.length > n);
}
