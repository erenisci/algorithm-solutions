function noBoringZeros(n) {
  return +String(n).replace(/0+$/, '');
}
