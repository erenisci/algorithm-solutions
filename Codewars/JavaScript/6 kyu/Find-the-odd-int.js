function findOdd(A) {
  const ht = {};
  for (let i = 0; i < A.length; i++) {
    if (!ht[A[i]]) ht[A[i]] = 1;
    else delete ht[A[i]];
  }

  return +Object.keys(ht);
}
