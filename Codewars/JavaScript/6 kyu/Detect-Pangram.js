function isPangram(string) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

  string = string.toLowerCase();
  return alphabets.every(x => string.includes(x));
}
