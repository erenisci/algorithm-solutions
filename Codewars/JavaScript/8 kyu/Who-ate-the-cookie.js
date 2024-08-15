function cookie(x) {
  return (
    'Who ate the last cookie? It was ' +
    (typeof x === 'string'
      ? 'Zach'
      : Number.isInteger(x) || typeof x === 'number'
      ? 'Monica'
      : 'the dog') +
    '!'
  );
}
