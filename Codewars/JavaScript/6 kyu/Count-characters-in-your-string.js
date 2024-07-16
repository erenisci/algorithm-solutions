function count(string) {
  const ht = {};
  const a = string.split('').map(chr => {
    if (!ht[chr]) ht[chr] = 1;
    else ht[chr]++;
  });
  return ht;
}
