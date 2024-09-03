function reverseNumber(n) {
  const res = +(n < 0 ? String(n).substring(1) : String(n)).split('').reverse().join('');
  return n < 0 ? -res : res;
}
