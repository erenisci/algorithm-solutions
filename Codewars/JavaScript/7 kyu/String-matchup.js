function solve(a, b) {
  const counts = {};

  for (const str of a) {
    counts[str] = (counts[str] || 0) + 1;
  }

  return b.map(str => counts[str] || 0);
}
