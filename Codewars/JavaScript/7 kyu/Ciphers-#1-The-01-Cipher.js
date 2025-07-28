function encode(plaintext) {
  return plaintext
    .toLowerCase()
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      if (code < 97 || 122 < code) return char;
      else return (code - 97) % 2;
    })
    .join('');
}
