function wordsToMarks(string) {
  return [...string].reduce((acc, curr) => curr.charCodeAt(0) - 96 + acc, 0);
}
