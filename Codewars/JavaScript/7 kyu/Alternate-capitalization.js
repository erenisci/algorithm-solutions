function capitalize(s) {
  return [0, 1].map(num =>
    [...s].map((str, index) => (index % 2 === num ? str.toUpperCase() : str)).join('')
  );
}
