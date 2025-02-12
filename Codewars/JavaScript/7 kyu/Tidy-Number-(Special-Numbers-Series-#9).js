function tidyNumber(n) {
  const strN = String(n);
  for (let i = 0; i < strN.length - 1; i++) {
    if (strN[i] > strN[i + 1]) return false;
  }
  return true;
}
