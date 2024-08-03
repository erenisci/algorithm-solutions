function symmetricPoint(p, q) {
  const [Px, Py] = p;
  const [Qx, Qy] = q;
  return [2 * Qx - Px, 2 * Qy - Py];
}
