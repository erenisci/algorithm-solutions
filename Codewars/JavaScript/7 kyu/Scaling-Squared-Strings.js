function scale(strng, k, n) {
  if (!strng) return '';

  return strng
    .split('\n')
    .flatMap(line => Array(n).fill([...line].map(c => c.repeat(k)).join('')))
    .join('\n');
}
