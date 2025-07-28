function scramble(str, arr) {
  return [...str]
    .map((char, i) => [arr[i], char])
    .sort((a, b) => a[0] - b[0])
    .map(pair => pair[1])
    .join('');
}
