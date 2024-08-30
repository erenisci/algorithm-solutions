function mergeStrings(first, second) {
  let overlap = 0;
  for (let i = 0; i < Math.min(first.length, second.length); i++) {
    if (first.endsWith(second.substring(0, i + 1))) overlap = i + 1;
  }
  return first + second.substring(overlap);
}
