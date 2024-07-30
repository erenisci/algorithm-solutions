function parseF(s) {
  const parsed = parseFloat(s);
  return !isNaN(parsed) ? parsed : null;
}
