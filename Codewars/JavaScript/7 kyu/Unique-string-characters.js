function solve(a, b) {
  return (
    [...a].filter(char => !b.includes(char)).join('') +
    [...b].filter(char => !a.includes(char)).join('')
  );
}
