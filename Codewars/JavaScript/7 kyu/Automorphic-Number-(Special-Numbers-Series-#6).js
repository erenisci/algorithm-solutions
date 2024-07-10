function automorphic(n) {
  const nPowString = String(n ** 2);
  const nString = String(n);

  return nPowString.endsWith(nString) ? 'Automorphic' : 'Not!!';
}
