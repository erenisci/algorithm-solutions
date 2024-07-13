function DNAtoRNA(dna) {
  let res = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      res += 'U';
      continue;
    }
    res += dna[i];
  }
  return res;
}
