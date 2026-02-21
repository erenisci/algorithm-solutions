function validateWord(s) {
  const lower = s.toLowerCase();

  const counts = {};
  for (const ch of lower) counts[ch] = (counts[ch] || 0) + 1;

  const values = Object.values(counts);
  return values.every(v => v === values[0]);
}
