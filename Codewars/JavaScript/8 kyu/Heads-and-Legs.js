function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;

  if (legs & 1 || chickens > heads || cows > heads) return 'No solutions';
  else return [chickens, cows];
}
