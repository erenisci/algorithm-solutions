function DNAStrand(dna) {
  const ops = { A: 'T', T: 'A', G: 'C', C: 'G' };
  return dna.replace(/./g, o => ops[o]);
}
