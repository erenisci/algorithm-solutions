function reverseLetter(str) {
  return str
    .match(/[a-zA-Z]/g)
    .reverse()
    .join('');
}
