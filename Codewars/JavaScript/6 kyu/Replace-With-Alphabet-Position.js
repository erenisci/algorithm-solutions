function alphabetPosition(text) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const resultString = text
    .toLowerCase()
    .split('')
    .filter(c => alphabet.includes(c))
    .map(c => alphabet.indexOf(c) + 1)
    .join(' ');

  return resultString;
}
