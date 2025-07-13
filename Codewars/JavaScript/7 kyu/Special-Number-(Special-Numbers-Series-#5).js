function specialNumber(n) {
  return /^[0-5]+$/.test(n.toString()) ? 'Special!!' : 'NOT!!';
}
