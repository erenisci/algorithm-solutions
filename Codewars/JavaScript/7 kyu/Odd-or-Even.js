function oddOrEven(array) {
  return array.reduce((pS, a) => pS + a, 0) % 2 === 0 ? 'even' : 'odd';
}
