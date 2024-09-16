function hasUniqueChars(str) {
  const ht = {};
  for (let i = 0; i < str.length; i++) {
    ht[str[i]] = (ht[str[i]] || 0) + 1;
    if (ht[str[i]] > 1) return false;
  }
  return true;
}
