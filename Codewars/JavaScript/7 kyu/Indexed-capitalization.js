function capitalize(string, indices) {
  const indexSet = new Set(indices);
  return string
    .split('')
    .map((char, i) => (indexSet.has(i) ? char.toUpperCase() : char))
    .join('');
}
