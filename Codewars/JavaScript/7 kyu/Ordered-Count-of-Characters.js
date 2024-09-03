function orderedCount(text) {
  const result = [];
  const seen = new Set();

  for (const char of text) {
    if (!seen.has(char)) {
      const count = text.split(char).length - 1;
      result.push([char, count]);
      seen.add(char);
    }
  }

  return result;
}
