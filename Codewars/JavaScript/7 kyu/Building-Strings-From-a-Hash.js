function solution(pairs) {
  return Object.entries(pairs)
    .map(entry => entry.join(' = '))
    .join(',');
}
