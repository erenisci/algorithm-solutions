function product(string) {
  let countex = 0,
    countque = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '?') countque++;
    if (string[i] === '!') countex++;
  }
  return countex * countque;
}
