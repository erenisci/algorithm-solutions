function amIWilson(p) {
  p = BigInt(p);

  const fac = n => (n ? n * fac(n - 1n) : 1n);
  const d = fac(p - 1n) + 1n;

  return !(d % (p * p));
}
