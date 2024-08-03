function correctPolishLetters(string) {
  const polishTable = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };

  return string
    .split('')
    .map(char => (polishTable[char] ? polishTable[char] : char))
    .join('');
}
