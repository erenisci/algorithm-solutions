function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map(str => str.split('').join(separator))
    .join(' ');
}
