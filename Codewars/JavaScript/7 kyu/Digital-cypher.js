function encode(str, n) {
  return str
    .toLowerCase()
    .split('')
    .map((char, i) => +char.charCodeAt(0) - 96 + +String(n)[i % String(n).length]);
}
