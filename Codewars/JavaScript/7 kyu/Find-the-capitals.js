function capitals(word) {
  return word
    .split('')
    .map((str, index) => {
      if (word.charCodeAt(word.indexOf(str)) < 97) return index;
    })
    .filter(x => x !== undefined);
}
