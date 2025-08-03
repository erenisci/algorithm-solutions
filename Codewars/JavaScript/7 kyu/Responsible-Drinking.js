function hydrate(s) {
  const total = s
    .match(/\d+/g)
    .map(Number)
    .reduce((sum, n) => sum + n, 0);

  return `${total} glass${total > 1 ? 'es' : ''} of water`;
}
