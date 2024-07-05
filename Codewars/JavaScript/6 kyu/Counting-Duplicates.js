function duplicateCount(text) {
  if (!text) return 0;

  const ht = {};
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (ht[text[i]] === undefined) ht[text[i]] = 0;
    else if (ht[text[i]] === 0) ht[text[i]]++;
  }
  return [...Object.values(ht)].reduce((a, s) => a + s, 0);
}
