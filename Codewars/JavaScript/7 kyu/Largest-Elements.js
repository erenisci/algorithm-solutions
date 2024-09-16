function largest(n, array) {
  const sorted = array.sort((a, b) => a - b);
  const sL = sorted.length;
  return sorted.slice(sL - n, sL);
}
