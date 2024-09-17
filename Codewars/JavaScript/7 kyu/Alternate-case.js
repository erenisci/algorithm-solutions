function alternateCase(s) {
  return s
    .split('')
    .map(char => (char.charCodeAt(0) >= 95 ? char.toUpperCase() : char.toLowerCase()))
    .join('');
}
